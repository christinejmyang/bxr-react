import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import './index.css'
import App from './App'
import About from './Components/about.js'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import rootReducer from './Reducers/rootreducer.js'
import { Provider } from 'react-redux'

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}> <App /> </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
