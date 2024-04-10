// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "mern-realeastet.firebaseapp.com",
  projectId: "mern-realeastet",
  storageBucket: "mern-realeastet.appspot.com",
  messagingSenderId: "799298131755",
  appId: "1:799298131755:web:8eb101f4a7eebf59ff576e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);