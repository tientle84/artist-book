import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCHoPj_REkZEAVekQEOxTe9MFxRDBm6Qz0",
    authDomain: "rn-artist-book.firebaseapp.com",
    projectId: "rn-artist-book",
    storageBucket: "rn-artist-book.appspot.com",
    messagingSenderId: "797216114519",
    appId: "1:797216114519:web:d7b0014966927ae2d76012",
    measurementId: "G-YKH3Z4R5TP",
};

let Firebase = null;
if (!firebase.apps.length) {
    Firebase = firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
//let Firebase = firebase.initializeApp(firebaseConfig);

export const db = Firebase.firestore();
export default Firebase;
