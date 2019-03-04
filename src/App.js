import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/header.js'
import MainPic from './Components/mainpic.js'
import HowItWorks from './Components/hiw.js'
import About from './Components/about.js'
import Footer from './Components/footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainPic />
        <HowItWorks />
        <Footer />
      </div>
    );
  }
}

export default App;
