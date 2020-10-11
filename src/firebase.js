import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBlQ5E_-ZBvyAFGofrZMR4lM1Rd4OE8fWQ",
    authDomain: "facebook-messenger-clone-bce12.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-bce12.firebaseio.com",
    projectId: "facebook-messenger-clone-bce12",
    storageBucket: "facebook-messenger-clone-bce12.appspot.com",
    messagingSenderId: "607988405458",
    appId: "1:607988405458:web:c352c2357000496da0c90b",
    measurementId: "G-P6Z4LV3E8K"
});

const db = firebaseApp.firestore();

export default db;


