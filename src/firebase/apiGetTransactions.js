import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "./firebase";

export async function apiGetTransactions({ roomId }) {
  const transactions = [];
  try {
    const q = query(
      collection(firestore, "transactions"),
      where("roomId", "==", roomId)
    );

    const querySnap = await getDocs(q);

    querySnap.forEach((doc) => {
      transactions.push({ ...doc.data(), id: doc.id });
    });

    transactions.sort((a, b) => b.createdAt - a.createdAt);
  } catch (e) {
    throw new Error(e.message);
  }
  return transactions;
}
