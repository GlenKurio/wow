import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "./firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export async function signUpWithEmailAndPassword({
  fullName,
  email,
  password,
  roomId,
}) {
  let userDoc;
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);

    if (!newUser) {
      throw new Error("Failed to create user");
    }
    const uniqueId = uuidv4();

    userDoc = {
      uid: newUser.user.uid,
      email: email,
      fullName: fullName,
      profilePicURL: "",
      createdAt: Date.now(),
      totalTransactions: 0,
      roomId: roomId || uniqueId,
    };

    await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
  } catch (e) {
    throw new Error(e.message);
  }

  return userDoc;
}
