import { auth } from "./firebase";
import { signOut } from "firebase/auth";
export async function handleLogout() {
  try {
    await signOut(auth);
    localStorage.removeItem("user-auth");
  } catch (error) {
    throw new Error(error.message);
  }
}
