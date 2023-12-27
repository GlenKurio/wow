import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, firestore } from "./firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const provider = new FacebookAuthProvider();

export async function authWithFacebook() {
  let userDoc;
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
      userDoc = {
        uid: newUser.user.uid,
        email: newUser.user.email,
        fullName: newUser.user.displayName,
        profilePicURL: newUser.user.photoURL,
        createdAt: Date.now(),
        totalTransactions: 0,
      };

      await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
      //   localStorage.setItem(JSON.stringify(userDoc));
    }
  } catch (e) {
    throw new Error(e.message);
  }

  return userDoc;
}
