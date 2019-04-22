import React, {Component} from 'react'
import Media from 'react-media'
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled'
import SignUp from './signup.js'
import { withFirebase } from '../Firebase'
import { compose } from 'recompose'

const DesktopSignIn = styled.div`
`;
const MobileSignIn = styled.div`
`;

const SignIn = () => (
  <SignInForm />
);

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/profile");
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const SignInPageDesktop = (
      <DesktopSignIn>
        <form onSubmit={this.onSubmit}>
          <h5>Sign In</h5>
          <div>
            <label htmlFor="email">Email</label>
            <input name="email" value={email} onChange={this.onChange} type="email"/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input name="password" value={password} onChange={this.onChange} type="password"/>
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <div>
            <p> Don't have an account? </p>
            <Link to="/signup"> <button>Sign Up</button> </Link>
          </div>
        </form>
      </DesktopSignIn>
    );

    const SignInPageMobile = (
      <MobileSignIn>
        <form onSubmit={this.onSubmit}>
          <h5>Sign In</h5>
          <div>
            <label htmlFor="email">Email</label>
            <input name="email" value={email} onChange={this.onChange} type="email"/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input name="password" value={password} onChange={this.onChange} type="password"/>
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <div>
            <p> Don't have an account? </p>
            <Link to="/signup"> <button>Sign Up</button> </Link>
          </div>
        </form>
      </MobileSignIn>
    );

    return (
      <Section title="">
        <Media query={{ minWidth: 500 }}>
          {matches => (matches ? SignInPageDesktop : SignInPageMobile)}
        </Media>
      </Section>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

export default SignIn;

export { SignInForm };
