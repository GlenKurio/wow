// Get all users with same room id

import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "./firebase";

export async function apiGetUsers({ roomId }) {
  let users = [];
  try {
    const q = query(
      collection(firestore, "users"),
      where("roomId", "==", roomId)
    );

    const querySnap = await getDocs(q);
    querySnap.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });
  } catch (e) {
    users = [];
    throw new Error(e.message);
  }
  return users;
}
