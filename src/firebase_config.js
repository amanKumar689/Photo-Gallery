import  firebase from 'firebase/app'
import  'firebase/storage'
import 'firebase/firestore'


var firebaseConfig = {
    // ...
    apiKey: "AIzaSyCm746ICs38ooPrJ6wIVeUz5FYMHJehmzM",
    authDomain: "photo-gallery-cf38f.firebaseapp.com",
    projectId: "photo-gallery-cf38f",
    storageBucket: "photo-gallery-cf38f.appspot.com",
    messagingSenderId: "856083929703",
    appId: "1:856083929703:web:7749207cddb68cf5ff52c2"
  };

  // Intialize Firebase  with Object contain with My firebase Detail 

   const check = firebase.initializeApp(firebaseConfig);
   var storage = firebase.storage();       // Storage Intialize
   var db = firebase.firestore();    //  database Intialize
 

  export {storage, db}

