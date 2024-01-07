import { deleteObject, ref } from "firebase/storage";
import { firestore, storage } from "./firebase";
import {
  deleteDoc,
  doc,
  getDoc,
  runTransaction,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export async function apiDeleteTransaction({ id, transactionData }) {
  const transactionAuthor = transactionData.author;
  const total = transactionData.total;
  let participants = [];
  let formattedExpense;
  if (transactionData.participants) {
    participants = transactionData.participants;
    const splitOn = participants.length + 1;
    const splittedAmount = total / splitOn;
    formattedExpense = +splittedAmount.toFixed(2);
  } else if (transactionData.recipient) {
    participants.push(transactionData.recipient);
    formattedExpense = total;
  }

  console.log(participants);

  try {
    // 1) Get all docs of participants of transaction and update them accordingly
    const batchUpdates = [];
    for (const participant of participants) {
      const participantRef = doc(firestore, "users", participant);

      const updatePromise = runTransaction(firestore, async (transaction) => {
        const participantDoc = await transaction.get(participantRef);

        const participantData = participantDoc.data();

        const fieldName = transactionAuthor;
        const currentFieldValue = participantData[fieldName];

        const updatedValue = currentFieldValue - formattedExpense; // Update the field value based on its previous value

        // Set the updated value of the transaction
        transaction.update(participantRef, { [fieldName]: updatedValue });
      });

      batchUpdates.push(updatePromise);
    }
    // Execute all transactions concurrently for each participant
    await Promise.all(batchUpdates);

    // 2) Update Author`s doc

    //get author`s doc
    const authorDocRef = doc(firestore, "users", transactionAuthor);
    let authorData;
    const docSnap = await getDoc(authorDocRef);
    if (docSnap.exists()) {
      authorData = { ...docSnap.data() };
    }
    const currentTransactions = authorData.totalTransactions;
    authorData = {
      ...authorData,
      totalTransactions: currentTransactions - 1,
    };
    // update balances for each participant in author`s doc
    participants.map((participant) => {
      const currentFieldValue = authorData[participant];

      const updatedValue = currentFieldValue + formattedExpense;
      authorData = {
        ...authorData,
        [participant]: updatedValue, // Dynamic field name and value
      };
    });
    await setDoc(authorDocRef, authorData);
    // 3) Delete transaction doc and image
    if (transactionData.img) {
      const imageRef = ref(storage, `transactions/${id}`);
      await deleteObject(imageRef);
    }
    await deleteDoc(doc(firestore, "transactions", id));
  } catch (e) {
    throw new Error(e.message);
  }
}
