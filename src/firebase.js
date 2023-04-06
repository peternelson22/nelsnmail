import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdk1DoKO7QFaZy90C3Cp454Ykv5sUbJno",
  authDomain: "nelsnmail-ng.firebaseapp.com",
  projectId: "nelsnmail-ng",
  storageBucket: "nelsnmail-ng.appspot.com",
  messagingSenderId: "874855259816",
  appId: "1:874855259816:web:8fd60946916552e10f6c9d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
