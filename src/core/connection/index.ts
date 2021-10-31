import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnWgzt9Wb3o0ki-BXildHzvmhVYzKOnAQ",
  authDomain: "badgedstore.firebaseapp.com",
  projectId: "badgedstore",
  storageBucket: "badgedstore.appspot.com",
  messagingSenderId: "122625606158",
  appId: "1:122625606158:web:37a28bb8633b7a7b43725f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
