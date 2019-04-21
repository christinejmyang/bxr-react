import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import './index.css'
import App from './App'
import Firebase, { FirebaseContext } from './Firebase'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './Reducers/index.js'
import { Provider } from 'react-redux'
import store from './store';
import thunk from 'redux-thunk'

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
