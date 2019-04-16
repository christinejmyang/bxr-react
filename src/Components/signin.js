import React, {Component} from 'react'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import firebase, {auth, provider} from './../firebase.js';

const MobileSignIn = styled.div`
`;

const DesktopSignIn = styled.div`
`;

class SignIn extends Component {

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
    const signInDesktop = (
      <DesktopSignIn>
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
              <button className="btn pink lighten-1 z-depth-0">Login</button>
            </div>
          </form>
        </div>
      </DesktopSignIn>
    );

    const signInMobile = (
    <MobileSignIn>
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
             <button className="btn pink lighten-1 z-depth-0">Login</button>
           </div>
         </form>
       </div>
    </MobileSignIn>
    );

    return(
      <Section title="">
        <Media query={{ minWidth: 500 }}>
          {matches => (matches ? signInDesktop : signInMobile)}
        </Media>
      </Section>
    );
  }
};

export default SignIn;
