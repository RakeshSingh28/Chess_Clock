// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { FIREBASE_API_KEY } from "./constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "netflix-gpt-f1e06.firebaseapp.com",
  projectId: "netflix-gpt-f1e06",
  storageBucket: "netflix-gpt-f1e06.firebasestorage.app",
  messagingSenderId: "478048063901",
  appId: "1:478048063901:web:58afeb8fd1a11640721f74",
  measurementId: "G-88K2MVSN37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
