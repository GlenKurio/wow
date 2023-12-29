import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  runTransaction,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore, storage } from "../firebase/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
//TODO: update balances with author of transaction for all participants by % of amount based on the number of participants
export default async function registerExpense(expense) {
  const expenseDoc = {
    ...expense,
    createdAt: Date.now(),
  };

  const participants = expenseDoc.participants;
  const author = expenseDoc.author;
  // split total on the number of participants (including current user)
  const total = expenseDoc.total;
  const splittedAmount = Number(total) / (participants.length + 1);
  console.log(" expense amount for each participant:", splittedAmount);

  let URL = "";

  try {
    //get author`s doc
    const docRef = doc(firestore, "users", author);
    let authorData;
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      authorData = { ...docSnap.data() };
    }
    //update number of transactions
    const currentTransactions = authorData.totalTransactions;

    authorData = {
      ...authorData,
      totalTransactions: currentTransactions + 1,
    };
    // update balances for each participant in current user`s doc

    participants.map((participant) => {
      const currentFieldValue = authorData[participant];
      console.log(`current balance with ${participant}`, currentFieldValue);
      const updatedValue = Number(currentFieldValue) - Number(splittedAmount);
      authorData = {
        ...authorData,
        [participant]: updatedValue, // Dynamic field name and value
      };
    });

    console.log("new author Doc", authorData);
    await setDoc(doc(firestore, "users", author), authorData);

    const expenseDocRef = await addDoc(
      collection(firestore, "expenses"),
      expenseDoc
    );

    if (expense.img) {
      const expenseImgRef = ref(storage, `transactions/${expenseDocRef.id}`);
      await uploadString(expenseImgRef, expense.img, "data_url");
      URL = await getDownloadURL(expenseImgRef);
      await updateDoc(expenseDocRef, { img: URL });
    }
    // update balances with current user for every participant
    const batchUpdates = [];
    for (const participant of participants) {
      const participantRef = doc(firestore, "users", participant);

      const updatePromise = runTransaction(firestore, async (transaction) => {
        const participantDoc = await transaction.get(participantRef);

        const participantData = participantDoc.data();
        const fieldName = author;
        const currentFieldValue = participantData[fieldName];

        const updatedValue = Number(currentFieldValue) + Number(splittedAmount); // Update the field value based on its previous value

        // Set the updated value in the transaction
        transaction.update(participantRef, { [fieldName]: updatedValue });
      });

      batchUpdates.push(updatePromise);
    }
    // Execute all transactions concurrently for each participant
    await Promise.all(batchUpdates);
  } catch (e) {
    throw new Error(e.message);
  }
}
