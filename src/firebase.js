import firebase from "firebase"

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC5HjoTU7oDrhoogx70m-na8WvcpinFL_E", // replace with .env file's info when pushing to git -- don't want apiKey publicly visible
  authDomain: "cs290-bxr.firebaseapp.com",
  databaseURL: "https://cs290-bxr.firebaseio.com",
  projectId: "cs290-bxr",
  storageBucket: "cs290-bxr.appspot.com",
  messagingSenderId: "889702854041"
};

firebase.initializeApp(config);
export default firebase;
