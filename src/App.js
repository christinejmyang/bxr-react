import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Components/header.js';
import MainPic from './Components/mainpic.js';
import HowItWorks from './Components/hiw.js';
import About from './Components/about.js';
import Footer from './Components/footer.js';
import AboutMain from './AboutMain';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div>
          <header>
            <a class="header-index" href="index.html">bxr</a>
            <nav>
              <ul>
                <li> <a class="dropbtn">
                <div class="dropdown"><a>Benefits</a><div class="dropdown-content">
                    <a href="">For Brands</a>
                    <a href="">For Owners</a>
                    <a href="">For Renters</a>
                  </div>
                </div></a></li>
                <li> <Link to="/about"> <p> About </p> </Link> </li>
                <li> <a href="#hiw"> How it Works </a> </li>
              </ul>
            </nav>
          </header>
        </div>
        <MainPic />
        <HowItWorks />
        <Footer />
        <Route path='/about' component={AboutMain}></Route>
      </div>
      </Router>
    );
  }
}

export default App;
