import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "./firebase";
import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  query,
  collection,
  where,
  writeBatch,
} from "firebase/firestore";
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
    const userRef = doc(firestore, "users", newUser.user.uid);

    const uniqueId = uuidv4();

    userDoc = {
      uid: newUser.user.uid,
      email: email,
      fullName: fullName,
      profilePicURL: "",
      createdAt: Date.now(),
      totalTransactions: 0,
      roomId: uniqueId,
    };
    if (roomId) {
      let usersInTheRoom = [];

      const q = query(
        collection(firestore, "users"),
        where("roomId", "==", roomId)
      );

      const querySnap = await getDocs(q);
      querySnap.forEach((doc) => {
        usersInTheRoom.push(doc.id);
      });

      // add a uid row into each userDoc in the room with cuurently signin up user UID ('signingUpUserUID': 0)
      const batch = writeBatch(firestore);
      usersInTheRoom.forEach((user) => {
        const fieldName = newUser.user.uid;
        const userRef = doc(firestore, "users", user);
        batch.update(userRef, { [fieldName]: 0 });
      });
      await batch.commit();

      // add a uids of all users into currently signing up user doc ('userInTheRoomUID': 0)
      usersInTheRoom.map((user) => {
        userDoc = {
          ...userDoc,
          [user]: 0, // Dynamic field name and value
          roomId: roomId,
        };
      });

      await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
    } else {
      await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
    }
  } catch (e) {
    throw new Error(e.message);
  }

  return userDoc;
}
