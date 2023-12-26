import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
export async function signUpWithEmailAndPassword({
  fullName,
  email,
  password,
}) {
  let userDoc;
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);

    if (!newUser) {
      throw new Error("Failed to create user");
    }

    userDoc = {
      uid: newUser.user.uid,
      email: email,
      fullName: fullName,
      profilePicURL: "",
      createdAt: Date.now(),
      totalTransactions: 0,
    };

    await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
  } catch (e) {
    throw new Error(e.message);
  }

  return userDoc;
}
