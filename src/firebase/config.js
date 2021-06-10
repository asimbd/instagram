import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
   apiKey: "AIzaSyB_LddG1b9ymq05ouUTlY274YwWBeKaPZY",
   authDomain: "gaminggallery-d791d.firebaseapp.com",
   projectId: "gaminggallery-d791d",
   storageBucket: "gaminggallery-d791d.appspot.com",
   messagingSenderId: "623151309006",
   appId: "1:623151309006:web:aa5440407234c94b8df09f",
   measurementId: "G-WGG8MY3H86"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };