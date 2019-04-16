import React, { Component } from 'react';
import './../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Media from 'react-media';
import firebase, {auth, provider} from './../index.js';
import { Section, bodyTextStyle } from './Section.js'

class Nav extends Component {
  render() {
    const desktopHeader = (
      <div>
        <header>
          <Link to="/"> <p class="header-index">bxr</p> </Link>
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
              <li class="HeaderLink"> <Link to="/signin"> <p> Sign In </p> </Link> </li>
            </ul>
          </nav>
        </header>
      </div>
    );

    const mobileHeader = (
      <div>
          <header>
            <Link to="/"> <p class="header-index">bxr</p> </Link>
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
          </header>
        </div>
    );

    return (
        <Media query={{ minWidth: 500 }}>
          {matches => (matches ? desktopHeader : mobileHeader)}
        </Media>
    );
  }

}

export default Nav;
