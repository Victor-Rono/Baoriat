
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMjU5JIzQe0un_sHOZHVG0FTlRdRujZ8Y",
  authDomain: "baoriat-app.firebaseapp.com",
  databaseURL: "https://baoriat-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "baoriat-app",
  storageBucket: "baoriat-app.appspot.com",
  messagingSenderId: "1047256852660",
  appId: "1:1047256852660:web:5813a558187ba1a7b0cfe1",
  measurementId: "G-J9R3ZXRYKN"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export{db, auth, storage};