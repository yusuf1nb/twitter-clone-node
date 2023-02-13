import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKsirLoR9PFLgBWNs3kBwdOIgAqFeTnV8",
  authDomain: "twitter-clone-9eb78.firebaseapp.com",
  projectId: "twitter-clone-9eb78",
  storageBucket: "twitter-clone-9eb78.appspot.com",
  messagingSenderId: "156801962126",
  appId: "1:156801962126:web:4ca6cb69ff44d305d9b9df",
  measurementId: "G-TE0DJJ3P7L"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };