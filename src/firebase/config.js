import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDVCEWUMiSPmjmlSQDHakagoHyZlLlLncs",
  authDomain: "e-comm-814bf.firebaseapp.com",
  projectId: "e-comm-814bf",
  storageBucket: "e-comm-814bf.firebasestorage.app",
  messagingSenderId: "389880259864",
  appId: "1:389880259864:web:6ed43dd1a07c0e4aab6a6d",
  measurementId: "G-TST7W89JLR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { app, auth, db, storage, analytics };