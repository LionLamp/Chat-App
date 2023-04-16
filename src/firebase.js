// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtmEMpn74d2tL72Tp_b1PohTzM-B6Lxkc",
  authDomain: "react-chat-main.firebaseapp.com",
  projectId: "react-chat-main",
  storageBucket: "react-chat-main.appspot.com",
  messagingSenderId: "144119003750",
  appId: "1:144119003750:web:22151379a491379483cba7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);