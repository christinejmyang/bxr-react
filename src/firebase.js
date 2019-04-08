import firebase from "firebase"
require('dotenv').config()

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC5HjoTU7oDrhoogx70m-na8WvcpinFL_E",
  authDomain: "cs290-bxr.firebaseapp.com",
  databaseURL: "https://cs290-bxr.firebaseio.com",
  projectId: "cs290-bxr",
  storageBucket: "cs290-bxr.appspot.com",
  messagingSenderId: "889702854041"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
