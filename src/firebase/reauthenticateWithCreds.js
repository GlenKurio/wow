import { reauthenticateWithCredential } from "firebase/auth";
import { auth } from "./firebase";
import { useState } from "react";
import { toast } from "react-hot-toast";

const user = auth.currentUser;

export async function reAuth({ credential }) {
  const [isReAuth, setIsReAuth] = useState(false);
  reauthenticateWithCredential(user, credential)
    .then(() => {
      // User re-authenticated.
      setIsReAuth(true);
    })
    .catch((error) => {
      // An error ocurred
      toast.error(error.message);
      setIsReAuth(false);
    });
  return isReAuth;
}
