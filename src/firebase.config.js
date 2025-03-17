// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI0yv1IVpMJ0Ro_4BI5ygJbFxF-BghVSI",
  authDomain: "ohas-store.firebaseapp.com",
  projectId: "ohas-store",
  storageBucket: "ohas-store.firebasestorage.app",
  messagingSenderId: "572406273684",
  appId: "1:572406273684:web:6d3d5766a7500de203c681"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()