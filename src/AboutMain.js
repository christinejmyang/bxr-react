import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './Components/header.js'
import About from './Components/about.js'
import Footer from './Components/footer.js'

class AboutMain extends Component {
  render() {
    return (
      <div className="AboutMain">
        <Header />
        <About />
        <Footer />
      </div>
    );
  }
}

export default AboutMain;
