import React, {Component} from 'react'
import Media from 'react-media'
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled'
import SignIn from './signin.js'
import { withFirebase } from '../Firebase'
import { compose } from 'recompose';

const MobileSignUp = styled.div`
`;

const DesktopSignUp = styled.div`
`;

const SignUp = () => (
  <SignUpForm />
);

const INITIAL_STATE = {
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, password } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/");
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
    const { email, password, firstname, lastname, error } = this.state;

    const SignUpPageDesktop = (
      <DesktopSignUp>
        <form onSubmit={this.onSubmit}>
          <h5>Sign Up</h5>
          <div>
            <label htmlFor="email">Email</label>
            <input name="email" value={email} onChange={this.onChange} type="email"/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input name="password" value={password} onChange={this.onChange} type="password"/>
          </div>
          <div>
            <label htmlFor="firstname">First Name</label>
            <input name="firstname" value={firstname} onChange={this.onChange} type="text"/>
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input name="lastname" value={lastname} onChange={this.onChange} type="text"/>
          </div>
          <button type="submit">Sign Up</button>
          <p> Already have an account? </p>
          <Link to="/signin"> <button>Sign In</button> </Link>
          {error && <p>{error.message}</p>}
        </form>
      </DesktopSignUp>
    );

    const SignUpPageMobile = (
      <MobileSignUp>
        <form onSubmit={this.onSubmit}>
          <h5>Sign Up</h5>
          <div>
            <label htmlFor="email">Email</label>
            <input name="email" value={email} onChange={this.onChange} type="email"/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input name="password" value={password} onChange={this.onChange} type="password"/>
          </div>
          <div>
            <label htmlFor="firstname">First Name</label>
            <input name="firstname" value={firstname} onChange={this.onChange} type="text"/>
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input name="lastname" value={lastname} onChange={this.onChange} type="text"/>
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
          <div>
            <p> Already have an account? </p>
            <Link to="/signin"> <button>Sign In</button> </Link>
          </div>
        </form>
      </MobileSignUp>
    );

    return (
      <Section title="">
        <Media query={{ minWidth: 500 }}>
          {matches => (matches ? SignUpPageDesktop : SignUpPageMobile)}
        </Media>
      </Section>
    );
  }
}

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUp;

export { SignUpForm };
