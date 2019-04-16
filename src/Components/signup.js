import React, {Component} from 'react'
import Media from 'react-media'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import firebase, {auth, provider} from './../firebase.js';

const MobileSignUp = styled.div`
`;

const DesktopSignUp = styled.div`
`;

class SignUp extends Component {
  state = {
    email:'',
    password:''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render () {
    const desktop = (
      <DesktopSignUp>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id='lastName' onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            </div>
            <div className="input-field">
              <p> Have an account? </p>
              <Link to="/signin"> <button className="btn pink lighten-1 z-depth-0">Sign In</button> </Link>
            </div>
          </form>
        </div>
      </DesktopSignUp>
    );

    const mobile = (
    <MobileSignUp>
       <div className="container">
         <form onSubmit={this.handleSubmit} className="white">
           <h5 className="grey-text text-darken-3">Sign In</h5>
           <div className="input-field">
             <label htmlFor="email">Email</label>
             <input type="email" id="email" onChange={this.handleChange}/>
           </div>
           <div className="input-field">
             <label htmlFor="password">Password</label>
             <input type="password" id="password" onChange={this.handleChange}/>
           </div>
           <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id='lastName' onChange={this.handleChange}/>
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            </div>
            <div className="input-field">
              <p> Have an account? </p>
              <Link to="/signin"> <button className="btn pink lighten-1 z-depth-0">Sign In</button> </Link>
            </div>
         </form>
       </div>
    </MobileSignUp>
    );

    return(
      <Section title="">
        <Media query={{ minWidth: 500 }}>
          {matches => (matches ? desktop : mobile)}
        </Media>
      </Section>
    );
  }
}

export default SignUp
