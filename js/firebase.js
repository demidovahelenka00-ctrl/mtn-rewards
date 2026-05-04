import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyAcqpVF5ZPRC97i83Ss531OxORR-vGO638",
    authDomain: "mtn-rewards-d6c6f.firebaseapp.com",
    projectId: "mtn-rewards-d6c6f",
    storageBucket: "mtn-rewards-d6c6f.firebasestorage.app",
    messagingSenderId: "736865464673",
    appId: "1:736865464673:web:8bdc11af0226912f065520",
    measurementId: "G-8N0ZZTP93F"
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
