import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDcEpAnkGi44t3XEC5TUyMfcEKEHgCKWwA",
  authDomain: "ek-student-dfaa9.firebaseapp.com",
  projectId: "ek-student-dfaa9",
  storageBucket: "ek-student-dfaa9.appspot.com",
  messagingSenderId: "223785383157",
  appId: "1:223785383157:web:8e73b3b340660f9a7c01bc"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
