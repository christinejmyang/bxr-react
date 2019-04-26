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
    margin-top: -8%;
    padding: 5%;
    display: grid;
    grid-template-areas:
        "header header header header"
        "main main main sidebar"
        "footer footer footer footer"
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

const MobileSignUp = styled.div`
    font-family: 'Avenir Next', sans-serif;
    background-color: white;
    width: 110%;
    margin-left: -10%;
    padding: 5%;
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

const DesktopButton = styled.div`
    display: inline-block;
    background-color: lightcoral;
    width: 38.5%;
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

const MobileButton = styled.div`
    display: inline-block;
    background-color: lightcoral;
    width: 90%;
    text-align: center;
    padding: 3%;
    margin-right: 2%;
    color: white;
    font-weight: bold;
    border-radius: 5px 5px 5px 5px;
`;

const DesktopFacebook = styled.div`
    display: inline-block;
    cursor: pointer;
    background-color: #4567b2;
    width: 90%;
    text-align: center;
    padding: 4%;
    color: white;
    font-weight: 600;
    border: 2px solid #4567b2;
    border-radius: 5px 5px 5px 5px;
`;

const MobileFacebook = styled.button`
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
    width: 90%;
    text-align: center;
    padding: 4%;
    margin-top: -8%;
    color: black;
    font-weight: 600;
    border: 2px solid black;
    border-radius: 5px 5px 5px 5px;
`;

const MobileGoogle = styled.button`
    display: inline-block;
    width: 90%;
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
        width: 95%;
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

const SignUpPage = () => (
  <SignUpView/>
);
    
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
        const { username, email, password } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
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
        const { email, password, firstname, lastname, birthday, error } = this.state;

        const SignUpPageDesktop = (
            <DesktopSignUp onSubmit={this.onSubmit}><h2>Sign Up</h2>
                <DesktopMain>
                    <form onSubmit={this.onSubmit}>
                        <DesktopInput name="email" value={email} onChange={this.onChange} type="email" placeholder="Email address"/>
                        <DesktopInput name="password" value={password} onChange={this.onChange} type="password" placeholder="Create a password"/><br/><br/>

                        <DesktopInput name="firstname" value={firstname} onChange={this.onChange} type="text" placeholder="First name"/>
                        <DesktopInput name="lastname" value={lastname} onChange={this.onChange} type="text" placeholder="Last name"/>
                    </form>
                </DesktopMain>
                <DesktopSidebar>
                    <DesktopFacebook>Sign up with Facebook</DesktopFacebook><br/><br/>
                    <DesktopGoogle onClick={this.googleLogin}>Sign up with Google</DesktopGoogle><br/><br/>
                </DesktopSidebar>
                <DesktopFooter>
                    <h3>Birthday</h3>
                    To sign up, you must be 18 or older. Other people won’t see your birthday.<br/><br/>
                    <DesktopInput name="birthday" value={birthday} onChange={this.onChange} type="date"/><br/><br/><br/>

                    We’ll send you marketing promotions, special offers, inspiration, and policy updates via email.<br/><br/>
                    <DesktopButton type="submit">Sign Up</DesktopButton>
                    Already have an account?<DesktopLink onClick={this.closePopup}>Sign In</DesktopLink><br/><br/>
                </DesktopFooter>
          {error && <p>{error.message}</p>}
            </DesktopSignUp>
        );

        const SignUpPageMobile = (
            <MobileSignUp onSubmit={this.onSubmit}><h2>Sign Up</h2>
              <MobileFacebook>Sign up with Facebook</MobileFacebook><br/>
              <MobileGoogle>Sign up with Google</MobileGoogle><br/><br/>
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
            {error && <p>{error.message}</p>}
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

const SignUpView = withFirebase(SignUpFormBase);
export default SignUpPage;
export { SignUpView };
