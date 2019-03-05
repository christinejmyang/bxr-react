import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Components/header.js';
import MainPic from './Components/mainpic.js';
import HowItWorks from './Components/hiw.js';
import About from './Components/about.js';
import Footer from './Components/footer.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div>
          <header>
            <Link to="/"> <p class="header-index">bxr</p> </Link>
            <nav>
              <ul>
                <li><a class="dropbtn">
                <div class="dropdown"><a>Benefits</a><div class="dropdown-content">
                    <a href="/">For Brands</a>
                    <a href="/">For Owners</a>
                    <a href="/">For Renters</a>
                  </div>
                </div></a></li>
                <li class="HeaderLink"> <Link to="/about"> <p class="AboutStyle"> About </p> </Link> </li>
                <li class="HeaderLink"> <Link to="/"> <p class="HIWStyle"> How it Works </p> </Link> </li>
              </ul>
            </nav>
          </header>
        </div>
        <Route path="/" component={MainPic} />
        <Switch>
          <Route exact path="/" component={HowItWorks} />
          <Route path="/about" component={About} />
        </Switch>
        <Route path="/" component={Footer}></Route>
      </div>
      </Router>
    );
  }
}

export default App;
