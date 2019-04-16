import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MainPic from './Components/mainpic.js';
import HowItWorks from './Components/hiw.js';
import About from './Components/about.js';
import Footer from './Components/footer.jsx';
import Products from './Components/products.jsx';
import SignIn from './Components/signin.js';
import Nav from './Components/nav.js';
import firebase from './index.js';

class App extends Component {


  render() {
    const user = firebase.auth().currentUser;

    const desktopHeader = (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/" component={MainPic} />
          </Switch>
          <Switch>
            <Route exact path="/" component={HowItWorks} />
            <Route path="/about" component={About} />
            <Route path="/signin" component={SignIn} />
          </Switch>
          <Route component={Footer}></Route>
        </div>
      </Router>
    );

  } //render
} //extends

export default App;
