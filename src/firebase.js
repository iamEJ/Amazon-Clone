import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBumrGzeS4uHCKr9CsYUE1KSFKmq0mc_aM",
  authDomain: "clone-4fced.firebaseapp.com",
  databaseURL: "https://clone-4fced.firebaseio.com",
  projectId: "clone-4fced",
  storageBucket: "clone-4fced.appspot.com",
  messagingSenderId: "157199550386",
  appId: "1:157199550386:web:41d468c4e85a6a189b86ab",
  measurementId: "G-YTTVK3JMJK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
