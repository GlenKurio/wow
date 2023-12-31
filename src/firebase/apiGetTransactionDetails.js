import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./firebase";

export async function apiGetTransactionDetails(id) {
  const docRef = doc(firestore, "transactions", id);
  let transactionData;
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      transactionData = { ...docSnap.data() };
    }
  } catch (e) {
    throw new Error(e.message);
  }

  return transactionData;
}
