import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNaxqsK5wrPBf8CRJOSXkuODeA9bO5Sj8",
  authDomain: "cyphertext-c043a.firebaseapp.com",
  projectId: "cyphertext-c043a",
  storageBucket: "cyphertext-c043a.appspot.com",
  messagingSenderId: "856370550049",
  appId: "1:856370550049:web:790f12508ac119c82a9a60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
