import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/storage';


//Initialize Firebase
var config = {
    apiKey: "AIzaSyBnP_MqsLUA4JapTTrYaNHEamjEYRe60RM",
    authDomain: "ubbmarketplace.firebaseapp.com",
    projectId: "ubbmarketplace",
    storageBucket: "ubbmarketplace.appspot.com",
    messagingSenderId: "834990874578",
    appId: "1:834990874578:web:d154a7693ee1b08c65320b",
    measurementId: "G-TS6B6KJ25V"
  };

  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;