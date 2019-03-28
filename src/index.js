import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import './index.css';
import App from './App';
import About from './Components/about.js';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";

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

// Initialize the default app
/* var defaultApp = firebase.initializeApp(defaultAppConfig);
console.log(defaultApp.name);  // "[DEFAULT]"
defaultStorage = firebase.storage();
defaultDatabase = firebase.database(); */

ReactDOM.render(<App />,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
