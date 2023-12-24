import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBWza8FkWult8lvhAY1wr6muHVNu71YZOw",
  authDomain: "who-owes-whom-49235.firebaseapp.com",
  projectId: "who-owes-whom-49235",
  storageBucket: "who-owes-whom-49235.appspot.com",
  messagingSenderId: "757076717649",
  appId: "1:757076717649:web:51a4e3982f8739f3508870",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
