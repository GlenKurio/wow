import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { firestore, storage } from "./firebase";

import { doc, updateDoc } from "firebase/firestore";

export async function updateProfile({ inputs, selectedFile, currentUserData }) {
  const storageRef = ref(storage, `profilePics/${currentUserData.uid}`);
  const userDocRef = doc(firestore, "users", currentUserData.uid);

  let URL;
  let updatedUser;
  try {
    if (selectedFile) {
      await uploadString(storageRef, selectedFile, "data_url");
      URL = await getDownloadURL(
        ref(storage, `profilePics/${currentUserData.uid}`)
      );
    }

    updatedUser = {
      fullName: inputs.fullName || currentUserData.fullName,
      email: inputs.email || currentUserData.email,
      profilePicURL: URL || currentUserData.profilePicURL,
    };

    await updateDoc(userDocRef, updatedUser);
  } catch (e) {
    throw new Error(e.message);
  }
  return updatedUser;
}
