import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA9_Q0-inIMY5bd4E1Npo1WcG71Ae9Gwec",
  authDomain: "e-fgood.firebaseapp.com",
  projectId: "e-fgood",
  storageBucket: "e-fgood.appspot.com",
  messagingSenderId: "715003471007",
  appId: "1:715003471007:web:127235fd444f9a376beeaa",
  measurementId: "G-T1SV7X67ES"
};

export const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
export const authFb = fb.auth();
