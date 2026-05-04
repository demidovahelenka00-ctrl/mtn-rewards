import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDOdsZx4Es1sWSvEr-Nm7sv6l6GPJuRKDw",
  authDomain: "mtn-rewards-d4faa.firebaseapp.com",
  projectId: "mtn-rewards-d4faa",
  storageBucket: "mtn-rewards-d4faa.firebasestorage.app",
  messagingSenderId: "566636707957",
  appId: "1:566636707957:web:a0b066ac5a498c01d5b83c",
  measurementId: "G-R13RFCYKDY"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
