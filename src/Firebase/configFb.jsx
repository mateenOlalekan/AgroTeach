// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwwL-bySHQFBbMcr5cmJQJkbfUcXhA-y8",
  authDomain: "fir-tutorial-70236.firebaseapp.com",
  projectId: "fir-tutorial-70236",
  storageBucket: "fir-tutorial-70236.firebasestorage.app",
  messagingSenderId: "1043030193570",
  appId: "1:1043030193570:web:681f485aca7a9a1a562efb",
  measurementId: "G-M2SZQ1G856"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const analytics = getAnalytics(app);