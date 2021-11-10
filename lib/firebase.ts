import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAPHogDOuAbQA-rOVyKb4gxrW-0lL1yL18",
  authDomain: "next-fire-app-4a5d1.firebaseapp.com",
  projectId: "next-fire-app-4a5d1",
  storageBucket: "next-fire-app-4a5d1.appspot.com",
  messagingSenderId: "870589634032",
  appId: "1:870589634032:web:bbb68bc2c650053fb7b935",
  measurementId: "G-LM3LPJHYWD",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
