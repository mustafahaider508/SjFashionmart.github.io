import firebase from "firebase";
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB5pQG69S1uWQTQudgmrB0rtcSy7V0Jg3U",
    authDomain: "sjfashionmart.firebaseapp.com",
    projectId: "sjfashionmart",
    storageBucket: "sjfashionmart.appspot.com",
    messagingSenderId: "370354001676",
    appId: "1:370354001676:web:8aeed5acc4522ded171b29",
    measurementId: "G-4BCG69VEP7"
  });

  const db = firebaseApp.firestore();
  
  export {db};