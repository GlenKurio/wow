import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, firestore } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
const provider = new GoogleAuthProvider();

export async function authWithGoogle({ roomId }) {
  let userDoc;
  console.log(roomId);
  try {
    const newUser = await signInWithPopup(auth, provider);
    if (!newUser && error) {
      throw new Error(error.message);
    }

    const userRef = doc(firestore, "users", newUser.user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      // Login
      userDoc = userSnap.data();
      //   localStorage.setItem(JSON.stringify(userDoc));
    } else {
      //signup
      const uniqueId = uuidv4();
      userDoc = {
        uid: newUser.user.uid,
        email: newUser.user.email,
        fullName: newUser.user.displayName,
        profilePicURL: newUser.user.photoURL,
        createdAt: Date.now(),
        totalTransactions: 0,
        roomId: roomId || uniqueId,
      };

      await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
      //   localStorage.setItem(JSON.stringify(userDoc));
    }
  } catch (e) {
    throw new Error(e.message);
  }

  return userDoc;
}
