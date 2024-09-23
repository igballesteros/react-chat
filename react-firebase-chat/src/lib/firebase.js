import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-ec972.firebaseapp.com",
  projectId: "reactchat-ec972",
  storageBucket: "reactchat-ec972.appspot.com",
  messagingSenderId: "822784149001",
  appId: "1:822784149001:web:c6f1ee392bfe80e1ff1ad8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()