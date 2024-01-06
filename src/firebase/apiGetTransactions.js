import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "./firebase";

export async function apiGetTransactions({ roomId, filter }) {
  const transactions = [];
  let q = query(
    collection(firestore, "transactions"),
    where("roomId", "==", roomId)
  );

  // FILTER
  if (filter)
    q = query(
      collection(firestore, "transactions"),
      where("roomId", "==", roomId),
      where(filter.field, "==", filter.value)
    );
  try {
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
