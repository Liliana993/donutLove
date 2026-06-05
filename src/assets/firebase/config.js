// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALV8sat-QCJM_an5SFdNH9TdoqC25F7OQ",
  authDomain: "crud-5c211.firebaseapp.com",
  projectId: "crud-5c211",
  storageBucket: "crud-5c211.firebasestorage.app",
  messagingSenderId: "267312222130",
  appId: "1:267312222130:web:4cef70f5daf774d9725eab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);