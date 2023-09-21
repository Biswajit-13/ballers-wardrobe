// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC53j1NbykzGTVeHTlvPLkuf1lnuarDrFU",
  authDomain: "jerseystore-d1ff4.firebaseapp.com",
  projectId: "jerseystore-d1ff4",
  storageBucket: "jerseystore-d1ff4.appspot.com",
  messagingSenderId: "423371688693",
  appId: "1:423371688693:web:5f4c8e35894ec03ce613bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };