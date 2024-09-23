// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-ec972.firebaseapp.com",
  projectId: "reactchat-ec972",
  storageBucket: "reactchat-ec972.appspot.com",
  messagingSenderId: "822784149001",
  appId: "1:822784149001:web:c6f1ee392bfe80e1ff1ad8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);