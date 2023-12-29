import {
  addDoc,
  collection,
  doc,
  getDoc,
  runTransaction,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { firestore, storage } from "../firebase/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
//TODO: add Author of transaction, update balances with author of transaction for all participants by amount of transfer

export default async function registerExpense(transfer) {
  const transferDoc = {
    ...transfer,

    createdAt: Date.now(),
  };
  const recipient = transferDoc.recipient;
  const author = transferDoc.author;
  const total = transferDoc.total;
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
    const transferDocRef = await addDoc(
      collection(firestore, "transfers"),
      transferDoc
    );

    // update balance for recipient in current user's doc
    const currentFieldValue = authorData[recipient];
    const updatedValue = Number(currentFieldValue) - Number(total);
    authorData = {
      ...authorData,
      [recipient]: updatedValue, // Dynamic field name and value
    };
    await setDoc(doc(firestore, "users", author), authorData);

    if (transfer.img) {
      const transferImgRef = ref(storage, `transactions/${transferDocRef.id}`);
      await uploadString(transferImgRef, transfer.img, "data_url");
      URL = await getDownloadURL(transferImgRef);
      await updateDoc(transferDocRef, { img: URL });
    }

    // update balance with current user for recipient
    const recipientRef = doc(firestore, "users", recipient);

    await runTransaction(firestore, async (transaction) => {
      const recipientDoc = await transaction.get(recipientRef);

      const recipientData = recipientDoc.data();
      const fieldName = author;
      const currentFieldValue = recipientData[fieldName];

      const updatedValue = Number(currentFieldValue) + Number(total); // Update the field value based on its previous value

      // Set the updated value in the transaction
      transaction.update(recipientRef, { [fieldName]: updatedValue });
    });
  } catch (e) {
    return new Error(e.message);
  }
}
