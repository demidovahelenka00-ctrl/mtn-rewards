import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "PASTE HERE",
  authDomain: "PASTE HERE",
  projectId: "PASTE HERE",
  appId: "PASTE HERE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA_X7SMHYfht72e-iblOdODCuyFMi1tnu4",
    authDomain: "mtn-rewards.firebaseapp.com",
    projectId: "mtn-rewards",
    storageBucket: "mtn-rewards.firebasestorage.app",
    messagingSenderId: "868026445194",
    appId: "1:868026445194:web:52f9587b159a050eb3ec73",
    measurementId: "G-KL0SRY5TW1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
