import React, { Component } from 'react'
import styled from '@emotion/styled'
import { Section, bodyTextStyle } from './Section.js'
import Media from 'react-media'
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom'
import Firebase, { FirebaseContext, withFirebase} from './../Firebase'
import { compose } from 'recompose'

const Main = styled.div`
	position: relative;
	text-align: center;
  margin-top: 150px;
`;
const DesktopPicture = styled.img`
  width: 100%;
`;
const Headline = styled.h1`
	font-family: 'Avenir Next', sans-serif;
	color: black;
	margin-top: -50px;
	font-weight: bold;
	text-align: center;
	font-size: 20px;
`;
const DesktopInput = styled.input`
    padding: 1%;
    margin-right: 2%;
    margin-top: 2%;
    font-family: 'Avenir Next', sans-serif;
    width: 80%;
    font-size: 1em;
    border: 1px solid lightgrey;
    border-radius: 5px 5px 5px 5px;
`;
const DesktopButton = styled.button`
    display: inline-block;
    background-color: lightcoral;
    width: 60%;
    text-align: center;
    padding: 3%;
    margin-right: 2%;
    color: white;
    font-weight: bold;
    border-radius: 5px 5px 5px 5px;
`;

const INITIAL_STATE = {
  aboutyou: '',
  interests: '',
  username: '',
  error: null,
};

class Info extends Component {
  constructor(props) {
      super(props);
      this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
      const { aboutyou, interests, username} = this.state;

      this.props.firebase
        .doUpdateUserInfo(aboutyou, interests, username, this.props.location.appState.uid)
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

	render(){
    const { aboutyou, interests, username, error } = this.state;
		return(
			  <Main>
					<Headline><i>Let's get to know each other! Tell us more about yourself below.</i></Headline>
          <form onSubmit={this.onSubmit}>
            <DesktopInput name="username" value={username} onChange={this.onChange} type="text" placeholder="Choose a username..."/><br/>
            <DesktopInput name="aboutyou" value={aboutyou} onChange={this.onChange} type="text" placeholder="Tell us about yourself..."/><br/>
            <DesktopInput name="interests" value={interests} onChange={this.onChange} type="text" placeholder="List your interests..."/><br/><br/><br/>
            <DesktopButton type="submit">Finish</DesktopButton><br/><br/>
          </form>
			  </Main>
		);
	}
}

export default withRouter(withFirebase(Info));
