// src/firebase.js

// Import only what you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your Firebase configuration (no measurementId needed)
const firebaseConfig = {
  apiKey: "AIzaSyDVCEWUMiSPmjmlSQDHakagoHyZlLlLncs",
  authDomain: "e-comm-814bf.firebaseapp.com",
  projectId: "e-comm-814bf",
  storageBucket: "e-comm-814bf.appspot.com", // ✅ Fixed
  messagingSenderId: "389880259864",
  appId: "1:389880259864:web:6ed43dd1a07c0e4aab6a6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize required services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export them for use in your app
export { app, auth, db, storage };
