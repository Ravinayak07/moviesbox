
import { initializeApp } from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHdCTbc9SmF5laWkQlUww9FBHAmjI6sSk",
  authDomain: "movies-boxx.firebaseapp.com",
  projectId: "movies-boxx",
  storageBucket: "movies-boxx.appspot.com",
  messagingSenderId: "299201438479",
  appId: "1:299201438479:web:cbdcec827dc6bcf560547a",
  measurementId: "G-MBNR36EXR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {auth, db, app};