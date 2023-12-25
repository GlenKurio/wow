import { addDoc, collection, updateDoc } from "firebase/firestore";
import { firestore, storage } from "../firebase/firebase";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
//TODO: add Author of transaction, update balances with author of transaction for all participants by amount of transfer

export default async function registerExpense(transfer) {
  const transferDoc = {
    ...transfer,
    user: null,
    createdAt: Date.now(),
  };

  let URL = "";
  try {
    const transferDocRef = await addDoc(
      collection(firestore, "transfers"),
      transferDoc
    );

    if (transfer.img) {
      const transferImgRef = ref(storage, `transactions/${transferDocRef.id}`);
      await uploadString(transferImgRef, transfer.img, "data_url");
      URL = await getDownloadURL(transferImgRef);
      await updateDoc(transferDocRef, { img: URL });
    }
  } catch (e) {
    return new Error(e.message);
  }
}
