import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { withFirebase} from './Firebase'

import Nav from './Components/nav.js'
import Homepage from './Components/homepage.js'
import Footer from './Components/footer.js'

import About from './Components/about.js'
import Brands from './Components/brands.js'
import Hosts from './Components/hosts.js'

import Products from './Components/products.js'
import MyProducts from './Components/myProducts.js'
import Survey from './Components/survey.js'

import SignIn from './Components/signin.js'
import SignUp from './Components/signup.js'
import Profile from './Components/profile.js'
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
            <Route exact path="/" component={Homepage} />
          </Switch>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/brands" component={Brands} /> 
            <Route path="/hosts" component={Hosts} />
        
            <Route path="/products" component={Products} />
            <Route path="/myproducts" component={MyProducts} />
            <Route path="/survey" component={Survey} />
        
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile" component={Profile} />
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
