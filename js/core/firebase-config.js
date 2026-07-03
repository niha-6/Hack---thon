/* =========================================
   CIVICSEWA - FIREBASE CONFIGURATION
   Path: js/core/firebase-config.js
   Description: Core engine for Auth, DB, and Storage.
========================================= */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDEE---1D47VBrn6ZUkvA8g15wkHT6OffQ",
  authDomain: "login-6ec26.firebaseapp.com",
  projectId: "login-6ec26",
  storageBucket: "login-6ec26.firebasestorage.app",
  messagingSenderId: "254059562735",
  appId: "1:254059562735:web:fd7e8b1c67f931944fbd1a",
  measurementId: "G-M2BX3WV9H2"
};
// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize and Export Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

console.log("Firebase Engine Initialized Successfully.");
