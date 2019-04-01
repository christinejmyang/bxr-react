import firebase from "firebase"
require('dotenv').config()

// Initialize Firebase
var config = {
  apiKey: process.env.REACT_APP_API_KEY, // replace with .env file's info when pushing to git -- don't want apiKey publicly visible
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
export default firebase;
