import { doc, getDoc } from "firebase/firestore";
import { firestore } from "./firebase";

export async function apiGetCurrentUserData(uid) {
  const docRef = doc(firestore, "users", uid);
  let userData;

  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      userData = { ...docSnap.data() };
    }
  } catch (e) {
    throw new Error(e.message);
  }
  return userData;
}
