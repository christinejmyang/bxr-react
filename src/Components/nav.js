import React, { Component } from 'react'
import './../App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import SignedInLinks from './signedInLinks.js'
import SignedOutLinks from './signedOutLinks.js'

const Nav = ({ authUser }) => (
  <div>{authUser ? <SignedInLinks /> : <SignedOutLinks />}</div>
);

export default Nav;
