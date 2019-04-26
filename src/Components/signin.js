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

const DesktopButton = styled.div`
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

const DesktopFacebook = styled.div`
    display: inline-block;
    cursor: pointer;
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

const MobileFacebook = styled.div`
    display: inline-block;
    background-color: #4567b2;
    width: 90%;
    text-align: center;
    padding: 3%;
    color: white;
    font-weight: 500;
    border: 2px solid #4567b2;
    border-radius: 5px 5px 5px 5px;
`;

const DesktopGoogle = styled.div`
    display: inline-block;
    cursor: pointer;
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

const MobileSignIn = styled.div`
`;

const SignInPage = () => (
  <SignInView/>
);

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
        this.googleLogin = this.googleLogin.bind(this);
    }
    
    googleLogin() {
        this.props.firebase
          .doSignInWithPopup(this.provider)
          .then((result) => {
            const user = result.user;
            this.setState({
              user
            });
          });
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
        <DesktopSignIn show={this.state.signingIn} onSubmit={this.onSubmit}><h2>Sign In</h2>
            <DesktopMain>
                <DesktopInput name="email" value={email} onChange={this.onChange} type="email" placeholder="Email Address"/><br/>
                <DesktopInput name="password" value={password} onChange={this.onChange} type="password" placeholder="Password"/><br/><br/><br/>
        
                <DesktopButton type="submit">Log In</DesktopButton><br/><br/>
                Don't have an account?<DesktopLink onClick={this.openPopup}>Sign Up</DesktopLink>
                <Popup show={this.state.isOpen} onClose={this.closePopup}>
                    <SignUp></SignUp>
                </Popup>
                <br/><br/>
            </DesktopMain>
            <DesktopSidebar>
                <DesktopFacebook>Sign in with Facebook</DesktopFacebook><br/><br/>
                <DesktopGoogle onClick={this.googleLogin}>Sign in with Google</DesktopGoogle><br/><br/>
            </DesktopSidebar>
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

const SignInView = withFirebase(SignInFormBase);
export default SignInPage;
export { SignInView };
