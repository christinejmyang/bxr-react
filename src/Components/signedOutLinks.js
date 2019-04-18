import React, { Component } from 'react';
import './../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Media from 'react-media';
import firebase, {auth, provider} from './../firebase.js';
import { Section, bodyTextStyle } from './Section.js'

class SignedOutLinks extends Component {
  render() {
    const desktop = (
      <nav>
        <ul class="HeaderUl">
          <li class="HeaderLink"><p>
          <div class="dropdown"><a>Benefits</a><div class="dropdown-content">
              <Link to="/">For Brands</Link>
              <Link to="/">For Owners</Link>
              <Link to="/">For Renters</Link>
            </div>
          </div></p></li>
          <li class="HeaderLink"> <Link to="/about"> <p> About </p> </Link> </li>
          <li class="HeaderLink"> <Link to="/"> <p> How it Works </p> </Link> </li>
          <li class="HeaderLink"> <Link to="/products"> <p> Sign In </p> </Link> </li>
        </ul>
      </nav>
    );

    const mobile = (
      <nav>
        <ul class="HeaderUl">
          <li class="HeaderLinkBurger">
            <p>
              <div class="hamburger">
                <a> &#9776; </a>
                <div class="dropdown-content">
                  <Link to="/about">About</Link>
                  <Link to="/">How It Works</Link>
                  <Link to="/signin">Sign In</Link>
                  <div class="dropdown2">
                    <a>Benefits</a>
                    <div class="dropdown-content2">
                      <Link to="/">For Brands</Link>
                      <Link to="/">For Owners</Link>
                      <Link to="/">For Renters</Link>
                    </div>
                  </div>
                </div>
              </div>
            </p>
          </li>
        </ul>
      </nav>
    );

    return (
        <Media query={{ minWidth: 500 }}>
          {matches => (matches ? desktop : mobile)}
        </Media>
    );
  }
}

export default SignedOutLinks;
