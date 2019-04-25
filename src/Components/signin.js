import React, {Component} from 'react'
import Media from 'react-media'
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled'
import SignUp from './signup.js'
import Popup from './signoutpopup.js'
import { withFirebase } from '../Firebase'
import { compose } from 'recompose'

const DesktopSignIn = styled.div`
    font-family: 'Avenir Next', sans-serif;
    background-color: white;
    width: 80%;
    margin-left: 5%;
    padding: 5%;
    display: grid;
    grid-template-areas:
        "header header header header"
        "main main . sidebar"
`;

const DesktopMain = styled.div`
    grid-area: main;
`;

const DesktopSidebar = styled.div`
    grid-area: sidebar;
`;

const DesktopInput = styled.input`
    padding: 1%;
    margin-right: 2%;
    margin-top: 2%;
    font-family: 'Avenir Next', sans-serif;
    width: 100%;
    font-size: 1em;
    border: 1px solid lightgrey;
    border-radius: 5px 5px 5px 5px;
`;

const DesktopButton = styled.button`
    display: inline-block;
    background-color: lightcoral;
    width: 97%;
    text-align: center;
    padding: 3%;
    margin-right: 2%;
    color: white;
    font-weight: bold;
    border-radius: 5px 5px 5px 5px;
`;

const DesktopLink = styled.a`
    color: lightcoral;
    font-weight: 600;
    margin-left: 1%;
    cursor: pointer;
    &:hover {
        color: grey;
    }
`;

const DesktopFacebook = styled.button`
    display: inline-block;
    background-color: #4567b2;
    width: 100%;
    text-align: center;
    padding: 4%;
    margin-left: -10%;
    margin-top: 3%;
    color: white;
    font-weight: 600;
    border: 2px solid #4567b2;
    border-radius: 5px 5px 5px 5px;
`;

const MobileInput = styled.input`
    padding: 3%;
    margin-right: 2%;
    margin-top: 2%;
    font-family: 'Avenir Next', sans-serif;
    width: 90%;
    font-size: 1em;
    border: 1px solid lightgrey;
    border-radius: 5px 5px 5px 5px;
`;

const DesktopGoogle = styled.button`
    display: inline-block;
    width: 100%;
    text-align: center;
    padding: 4%;
    margin-left: -10%;
    margin-top: -8%;
    color: black;
    font-weight: 600;
    border: 2px solid black;
    border-radius: 5px 5px 5px 5px;
`;

const MobileGoogle = styled.button`
    width: 100%;
    text-align: center;
    padding: 3%;
    margin-top: 2%;
    color: black;
    font-weight: 500;
    border: 2px solid black;
    border-radius: 5px 5px 5px 5px;
`;

const MobileLine = styled.hr`
    line-height: 1em;
    position: relative;
    outline: 0;
    border: 0;
    color: black;
    text-align: center;
    height: 1.5em;
    opacity: .5;
    &:before {
        content: '';
        background: darkgrey;
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        height: 1px;
    }
    &:after {
        content: attr(data-content);
        position: relative;
        display: inline-block;
        color: black;

        padding: 0 .5em;
        line-height: 1.5em;
        color: #818078;
        background-color: white;
      }
`;

const MobileFacebook = styled.button`
    background-color: #4567b2;
    width: 100%;
    text-align: center;
    padding: 3%;
    color: white;
    font-weight: 500;
    border: 2px solid #4567b2;
    border-radius: 5px 5px 5px 5px;
`;

const MobileButton = styled.button`
    display: inline-block;
    background-color: lightcoral;
    width: 100%;
    float: center;
    text-align: center;
    padding: 3%;
    margin-right: 2%;
    color: white;
    font-weight: bold;
    border-radius: 5px 5px 5px 5px;
`;

const MobileSignIn = styled.div`
  font-family: 'Avenir Next', sans-serif;
  background-color: white;
  width: 80%;
  margin-left: 5%;
  padding: 5%;
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
        this.state = { isOpen: false };
    }

    loginWithGoogle = () => {
      this.props.firebase
        .doSignInWithPopup()
        .then((result) => {
          const user = result.user;
          this.setState({
            user
          });
        });
        this.props.history.push("/profile");
    };

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

    openPopup = () => {
        this.setState({
            isOpen: true
        });
    };

    closePopup = () => {
        this.setState({
            isOpen: false
        });
    };

  render() {
    const { email, password, error } = this.state;
    const { isOpen } = this.state;

    const SignInPageDesktop = (
        <DesktopSignIn onSubmit={this.onSubmit}><h2>Sign In</h2>
          <DesktopMain>
            <form onSubmit={this.onSubmit}>
              <DesktopInput name="email" value={email} onChange={this.onChange} type="email" placeholder="Email Address"/><br/>
              <DesktopInput name="password" value={password} onChange={this.onChange} type="password" placeholder="Password"/><br/><br/><br/>
              <DesktopButton type="submit">Log In</DesktopButton><br/><br/>
              Don't have an account?<DesktopLink><Link to="/signup">Sign Up</Link></DesktopLink>
              <br/><br/>
            </form>
            <i>{error && <p>{error.message}</p>}</i>
          </DesktopMain>
          <DesktopSidebar>
              <DesktopFacebook>Sign in with Facebook</DesktopFacebook><br/><br/>
              <DesktopGoogle onClick={this.loginWithGoogle}>Sign in with Google</DesktopGoogle><br/><br/>
          </DesktopSidebar>
      </DesktopSignIn>
    );

    const SignInPageMobile = (
        <MobileSignIn onSubmit={this.onSubmit}><h2>Sign In</h2>
          <MobileFacebook>Sign in with Facebook</MobileFacebook><br/>
          <MobileGoogle onClick={this.loginWithGoogle}>Sign in with Google</MobileGoogle><br/><br/>
          <MobileLine data-content="or"/><br/>
          <form onSubmit={this.onSubmit}>
            <MobileInput name="email" value={email} onChange={this.onChange} type="email" placeholder="Email address"/><br/>
            <MobileInput name="password" value={password} onChange={this.onChange} type="password" placeholder="Password"/><br/><br/>
            <MobileButton type="submit">Sign In</MobileButton><br/><br/>
          </form>
          Don't have an account? <Link to="/signup">Sign Up</Link><br/><br/>

          <i>{error && <p>{error.message}</p>}</i>
        </MobileSignIn>
    );


    return (
      <Section title="">
        <Media query={{ minWidth: 800 }}>
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
