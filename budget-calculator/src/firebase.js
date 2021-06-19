import firebase from "firebase";
require("firebase/firestore");
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCKGnNeEG_KJ69_1xzJqwtiPSI9-lYdPH4",
    authDomain: "sample-budget-calculator.firebaseapp.com",
    projectId: "sample-budget-calculator",
    storageBucket: "sample-budget-calculator.appspot.com",
    messagingSenderId: "73782907539",
    appId: "1:73782907539:web:5e71e48842dd0af30a7366",
    measurementId: "G-CDVLZELZCN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

export const auth = firebase.auth();
export const firestore = firebase.firestore
export default db;