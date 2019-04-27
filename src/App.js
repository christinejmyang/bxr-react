import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { withFirebase} from './Firebase'
import MainPic from './Components/mainpic.js'
import HowItWorks from './Components/hiw.js'
import Footer from './Components/footer.jsx'
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
import Info from './Components/info.js'

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        authUser: null,
      };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }

  componentWillUnmount() {
      this.listener();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav authUser={this.state.authUser}/>
          <Switch>
            <Route exact path="/" component={MainPic} />
          </Switch>
          <Switch>
            <Route path="/" component={HowItWorks} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={Profile} />
            <Route path="/hosts" component={Hosts} />
            <Route path="/brands" component={Brands} />
            <Route path="/survey" component={Survey} />
            <Route path="/info" component={Info} />
          </Switch>
          <Switch>
            <Route path="/" component={Footer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);
