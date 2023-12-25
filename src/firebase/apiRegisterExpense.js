import { addDoc, collection, updateDoc } from "firebase/firestore";
import { firestore, storage } from "../firebase/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
//TODO: add Author of transaction, update balances with author of transaction for all participants by % of amount based on the number of participants
export default async function registerExpense(expense) {
  const expenseDoc = {
    ...expense,
    user: null,
    createdAt: Date.now(),
  };

  let URL = "";
  try {
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
  } catch (e) {
    return new Error(e.message);
  }
}
