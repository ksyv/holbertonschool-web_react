// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Remplacez cet objet par votre propre configuration Firebase !
const firebaseConfig = {
  apiKey: "AIzaSyDnVABZ5Q7Xay-9fJiaafwQ3jw7z092NAE",
  authDomain: "timer-app-react.firebaseapp.com",
  projectId: "timer-app-react",
  storageBucket: "timer-app-react.firebasestorage.app",
  messagingSenderId: "340623785373",
  appId: "1:340623785373:web:3d96e1af948cbb2e040374"
};


// Initialise Firebase
const app = initializeApp(firebaseConfig);

// Exporte les services que nous utiliserons dans l'application
export const auth = getAuth(app);
export const db = getFirestore(app);