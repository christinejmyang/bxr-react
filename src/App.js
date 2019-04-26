import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Nav from './Components/nav.js'
import Homepage from './Components/homepage.js'
import SignIn from './Components/signin.js'
import SignUp from './Components/signup.js'

import About from './Components/about.js'
import Products from './Components/products.jsx'
import Hosts from './Components/hosts.js'
import Brands from './Components/brands.js'

import Profile from './Components/profile.jsx'
import Survey from './Components/survey.js'
import Footer from './Components/footer.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path="/" component={Homepage} />
          </Switch>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={Profile} />
            <Route path="/hosts" component={Hosts} />
            <Route path="/brands" component={Brands} />
            <Route path="/survey" component={Survey} />
          </Switch>
          <Switch>
            <Route path="/" component={Footer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
