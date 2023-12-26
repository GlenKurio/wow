import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

export async function apiLogin({ email, password }) {
  let userData;
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);

    if (userCred) {
      const docRef = doc(firestore, "users", userCred.user.uid);
      const docSnap = await getDoc(docRef);
      userData = docSnap.data();
    }
  } catch (e) {
    throw new Error(e.message);
  }
  return userData;
}
