// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkrQLMA9OvA77vHTetRwXEZiwJ4M_Bqgk",
  authDomain: "nurture-3fc7d.firebaseapp.com",
  projectId: "nurture-3fc7d",
  storageBucket: "nurture-3fc7d.appspot.com",
  messagingSenderId: "1044398209198",
  appId: "1:1044398209198:web:3209c5927e60890378153f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);