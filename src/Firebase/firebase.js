import firebase from "firebase"
import app from 'firebase/app'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: process.env.REACT_APP_API_KEY, // replace with .env file's info when pushing to git -- don't want apiKey publicly visible
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.provider = new app.auth.GoogleAuthProvider();
    this.auth = app.auth();
    this.database = app.database();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignInWithPopup = () =>
    this.auth.signInWithPopup(this.provider);

  doSignOut = () =>
    this.auth.signOut();

  doPasswordReset = email =>
    this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  showDatabase = (id) =>
    app.database().ref(id);

  doOnAuthStateChanged = (user) =>
    this.auth.onAuthStateChanged(user);

  doCreateNewUser = (aboutyou, interests, username) =>
    app.database().ref('users/' + username).set({
      aboutyou: aboutyou,
      interests: interests
    });

}

export default Firebase;
