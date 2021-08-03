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

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
