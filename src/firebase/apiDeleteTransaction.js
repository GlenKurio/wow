import { deleteObject, ref } from "firebase/storage";
import { firestore, storage } from "./firebase";
import { deleteDoc, doc, getDoc, runTransaction } from "firebase/firestore";

export async function apiDeleteTransaction({ id, transactionData }) {
  let participants = [];

  if (transactionData.participants) {
    participants = transactionData.participants;
  } else if (transactionData.recipient) {
    participants.push(transactionData.recipient);
  }

  console.log(participants);
  const transactionAuthor = transactionData.author;
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

        const updatedValue = currentFieldValue - +transactionData.total; // Update the field value based on its previous value

        // Set the updated value of the transaction
        transaction.update(participantRef, { [fieldName]: updatedValue });
      });

      batchUpdates.push(updatePromise);
    }
    // Execute all transactions concurrently for each participant
    await Promise.all(batchUpdates);

    // 2) Update Author`s doc

    //get author`s doc
    const docRef = doc(firestore, "users", transactionAuthor);
    let authorData;
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      authorData = { ...docSnap.data() };
    }
    //update number of transactions
    const currentTransactions = authorData.totalTransactions;

    authorData = {
      ...authorData,
      totalTransactions: currentTransactions - 1,
    };

    // update balances for each participant in author`s doc
    participants.map((participant) => {
      const currentFieldValue = authorData[participant];

      const updatedValue = currentFieldValue + transactionData.total;
      authorData = {
        ...authorData,
        [participant]: updatedValue, // Dynamic field name and value
      };
    });

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
