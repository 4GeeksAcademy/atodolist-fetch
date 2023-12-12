// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPbxgHx9Bz1DX1E-WZzK7DaAgmbmGZF6Q",
  authDomain: "firestore-database-179fc.firebaseapp.com",
  projectId: "firestore-database-179fc",
  storageBucket: "firestore-database-179fc.appspot.com",
  messagingSenderId: "274091461719",
  appId: "1:274091461719:web:62df1b03579e00268ea712",
  measurementId: "G-29KNJVP3HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore (app);