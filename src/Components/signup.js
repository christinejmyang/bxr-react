import React, {Component} from 'react'
import Media from 'react-media'
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled'
import SignIn from './signin.js'
import { withFirebase } from '../Firebase'
import { compose } from 'recompose';

const DesktopSignUp = styled.div`
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

const DesktopFooter = styled.div`
    grid-area: footer;
`;

const DesktopInput = styled.input`
    padding: 1%;
    margin-right: 2%;
    font-family: 'Avenir Next', sans-serif;
    width: 42%;
    font-size: 1em;
    border: 1px solid lightgrey;
    border-radius: 5px 5px 5px 5px;
`;

const DesktopButton = styled.button`
    display: inline-block;
    background-color: lightcoral;
    width: 30%;
    text-align: center;
    padding: 1.5%;
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
    width: 90%;
    text-align: center;
    padding: 4%;
    margin-left: -2%;
    color: white;
    font-weight: 600;
    border: 2px solid #4567b2;
    border-radius: 5px 5px 5px 5px;
`;

const DesktopGoogle = styled.button`
    display: inline-block;
    width: 90%;
    text-align: center;
    padding: 4%;
    margin-left: -2%;
    margin-top: -8%;
    color: black;
    font-weight: 600;
    border: 2px solid black;
    border-radius: 5px 5px 5px 5px;
`;

const MobileSignUp = styled.div`
    font-family: 'Avenir Next', sans-serif;
    background-color: white;
    width: 80%;
    margin-left: 5%;
    padding: 5%;
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

const SignUp = () => (
  <SignUpForm />
);

const INITIAL_STATE = {
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  birthday: '',
  error: null,
};

class SignUpFormBase extends Component {
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
        this.props.history.push("/info")
      });
  };

  onSubmit = event => {
    const { username, email, password } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push("/info");
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
    const { email, password, firstname, lastname, birthday, error } = this.state;
    const { isOpen } = this.state;

    const SignUpPageDesktop = (
        <DesktopSignUp onSubmit={this.onSubmit}><h2>Sign Up</h2>
          <DesktopMain>
            <form onSubmit={this.onSubmit}>
              <DesktopInput name="email" value={email} onChange={this.onChange} type="email" placeholder="Email address"/>
              <DesktopInput name="password" value={password} onChange={this.onChange} type="password" placeholder="Create a password"/><br/><br/>

              <DesktopInput name="firstname" value={firstname} onChange={this.onChange} type="text" placeholder="First name"/>
              <DesktopInput name="lastname" value={lastname} onChange={this.onChange} type="text" placeholder="Last name"/>

              <h3>Birthday</h3>
              To sign up, you must be 18 or older. Other people won’t see your birthday.<br/><br/>
              <DesktopInput name="birthday" value={birthday} onChange={this.onChange} type="date"/><br/><br/><br/>

              We’ll send you marketing promotions, special offers, inspiration, and policy updates via email.<br/><br/>
              <DesktopButton type="submit">Sign Up</DesktopButton>
            </form>
              Already have an account? <Link to="/signin">Sign In</Link><br/><br/>
          </DesktopMain>
          <DesktopSidebar>
              <DesktopFacebook>Sign up with Facebook</DesktopFacebook><br/><br/>
              <DesktopGoogle onClick={this.loginWithGoogle}>Sign up with Google</DesktopGoogle><br/><br/>
          </DesktopSidebar>
          <i>{error && <p>{error.message}</p>}</i>
        </DesktopSignUp>
    );

    const SignUpPageMobile = (
        <MobileSignUp onSubmit={this.onSubmit}><h2>Sign Up</h2>
          <MobileFacebook>Sign up with Facebook</MobileFacebook><br/>
          <MobileGoogle onClick={this.loginWithGoogle}>Sign up with Google</MobileGoogle><br/><br/>
          <MobileLine data-content="or"/><br/>
          <form onSubmit={this.onSubmit}>
            <MobileInput name="email" value={email} onChange={this.onChange} type="email" placeholder="Email address"/><br/>
            <MobileInput name="password" value={password} onChange={this.onChange} type="password" placeholder="Create a password"/><br/><br/>

            <MobileInput name="firstname" value={firstname} onChange={this.onChange} type="text" placeholder="First name"/><br/>
            <MobileInput name="lastname" value={lastname} onChange={this.onChange} type="text" placeholder="Last name"/><br/><br/>

            <h3>Birthday</h3>
            To sign up, you must be 18 or older. Other people won’t see your birthday.<br/><br/>
            <MobileInput name="birthday" value={birthday} onChange={this.onChange} type="date"/><br/><br/><br/>

            We’ll send you marketing promotions, special offers, inspiration, and policy updates via email.<br/><br/>
            <MobileButton type="submit">Sign Up</MobileButton><br/><br/>
          </form>
          Already have an account? <Link to="/signin">Sign In</Link><br/><br/>

          <i>{error && <p>{error.message}</p>}</i>
        </MobileSignUp>
    );

    return (
      <Section title="">
        <Media query={{ minWidth: 800 }}>
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
