import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';


 var firebaseConfig = {
  apiKey: "AIzaSyBiaed9usWLJLmLrWO7Kd8kY5LMWGO3mkY",
  authDomain: "image-gallery-4f292.firebaseapp.com",
  projectId: "image-gallery-4f292",
  storageBucket: "image-gallery-4f292.appspot.com",
  messagingSenderId: "918674217692",
  appId: "1:918674217692:web:a025ad7d32152f04fbb219"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };