import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, firestore } from "./firebase";
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  where,
  query,
  writeBatch,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
const provider = new GoogleAuthProvider();

export async function authWithGoogle({ roomId }) {
  let userDoc;

  try {
    const newUser = await signInWithPopup(auth, provider);
    if (!newUser && error) {
      throw new Error(error.message);
    }

    const newUserRef = doc(firestore, "users", newUser.user.uid);

    const userSnap = await getDoc(newUserRef);

    const uniqueId = uuidv4();
    userDoc = {
      uid: newUser.user.uid,
      email: newUser.user.email,
      fullName: newUser.user.displayName,
      profilePicURL: newUser.user.photoURL,
      createdAt: Date.now(),
      totalTransactions: 0,
      roomId: uniqueId,
    };
    if (userSnap.exists()) {
      // Login
      userDoc = userSnap.data();
      //   localStorage.setItem(JSON.stringify(userDoc));
    } else if (roomId) {
      //signup and update docs for all users
      // getAll users in the room
      let usersInTheRoom = [];

      const q = query(
        collection(firestore, "users"),
        where("roomId", "==", roomId)
      );

      const querySnap = await getDocs(q);
      querySnap.forEach((doc) => {
        usersInTheRoom.push(doc.id);
      });

      // add a uid row into each userDoc in the room with curently signin up user UID ('signingUpUserUID': 0)
      const batch = writeBatch(firestore);
      usersInTheRoom.forEach((user) => {
        const fieldName = newUser.user.uid; // Field name from user.uid
        const userRef = doc(firestore, "users", user);
        batch.update(userRef, { [fieldName]: 0 });
      });
      await batch.commit();

      // add a uids of all users into currently signing up user doc ('userInTheRoomUID': 0)
      // add a uids of all users into currently signing up user doc ('userInTheRoomUID': 0)
      usersInTheRoom.map((user) => {
        userDoc = {
          ...userDoc,
          [user]: 0, // Dynamic field name and value
          roomId: roomId,
        };
      });
      console.log("new user doc:", userDoc);
      await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
    } else {
      // signup with new doc

      await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
      //   localStorage.setItem(JSON.stringify(userDoc));
    }
  } catch (e) {
    throw new Error(e.message);
  }

  return userDoc;
}
