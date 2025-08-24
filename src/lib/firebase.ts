// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_A_CrcnhKa8KEOxJUXd5X65wXLRN3Yg4",
  authDomain: "portfolio-ka-db.firebaseapp.com",
  projectId: "portfolio-ka-db",
  storageBucket: "portfolio-ka-db.appspot.com",
  messagingSenderId: "494925794271",
  appId: "1:494925794271:web:b269c8a85986c9a36dd26a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
