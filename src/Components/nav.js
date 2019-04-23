import React, { Component } from 'react'
import './../App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import SignedInLinks from './signedInLinks.js'
import SignedOutLinks from './signedOutLinks.js'


class Nav extends Component {
  render() {
    return (
      <div>
          <SignedOutLinks />
      </div>
    );
  }
}

export default Nav;
