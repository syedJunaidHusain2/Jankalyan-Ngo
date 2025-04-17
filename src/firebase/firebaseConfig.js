// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // ✅ Add this line

// const firebaseConfig = {
//     apiKey: process.env.VITE_FIREBASE_API_KEY,
//     authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.VITE_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.VITE_FIREBASE_APP_ID,
//     measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID
//   };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 

export { app, db, auth }; 
