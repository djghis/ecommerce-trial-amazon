// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB6bas_gJA2Lk3tL7u4vhV-Q9YPeWskPkc",
    authDomain: "clone-99b81.firebaseapp.com",
    projectId: "clone-99b81",
    storageBucket: "clone-99b81.appspot.com",
    messagingSenderId: "734189927370",
    appId: "1:734189927370:web:4ba27aa113065299bd6d33",
    measurementId: "G-RR5NY7TQLQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};