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
    width: 20%;
    font-size: 1em;
    border: 1px solid lightgrey;
    border-radius: 5px 5px 5px 5px;
`;
const DesktopLongInput = styled.input`
    padding: 1%;
    margin-right: 2%;
    margin-top: 2%;
    font-family: 'Avenir Next', sans-serif;
    width: 20%;
    height: 150px;
    font-size: 1em;
    border: 1px solid lightgrey;
    border-radius: 5px 5px 5px 5px;
`;
const DesktopButton = styled.button`
    display: inline-block;
    background-color: lightcoral;
    font-family: 'Avenir Next', sans-serif;
    cursor: pointer;
    width: 10%;
    text-align: center;
    padding: 0.6%;
    margin-right: 2%;
    font-size: 1em;
    color: white;
    font-weight: bold;
    border-radius: 5px 5px 5px 5px;
    border: 0px solid transparent;
`;

const INITIAL_STATE = {
  aboutyou: '',
  interests: '',
  username: '',
	firstname: '',
	lastname: '',
	email: '',
  error: null
};

class Info extends Component {
  constructor(props) {
      super(props);
      this.state = { ...INITIAL_STATE };
  }

	componentDidMount() {
		if (this.props.location.state != null) {
      const { firstname, lastname, email } = this.props.location.state
      this.setState( {
        firstname: firstname,
				lastname: lastname,
				email: email
      });
    }
    else {
      this.setState( {
        firstname: null,
				lastname: null,
				email: null
      });
    }
	}

  onSubmit = event => {
      const { aboutyou, interests, username, firstname, lastname, email} = this.state;
			const userid = this.props.firebase.doGetCurrentUser();

      this.props.firebase
        .doUpdateUserInfo(aboutyou, interests, username, firstname, lastname, email, userid)
        .then(() => {
          this.setState({ ...INITIAL_STATE });
					this.props.history.push('/profile');
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
    const { aboutyou, interests, username, firstname, lastname, email, error } = this.state;
		return(
			  <Main>
					<Headline><i><br/>Let's get to know each other! Tell us more about yourself below.</i></Headline>
          <form onSubmit={this.onSubmit}>
						<DesktopInput name="firstname" value={firstname} onChange={this.onChange} type="text" placeholder={firstname ? firstname : "First Name"}/>
            <DesktopInput name="lastname" value={lastname} onChange={this.onChange} type="text" placeholder={lastname ? lastname : "Last Name"}/><br/>
            <DesktopInput name="email" value={email} onChange={this.onChange} type="text" placeholder={email ? email : "Email"}/>
            <DesktopInput name="username" value={username} onChange={this.onChange} type="text" placeholder="Choose a username"/><br/>
            <DesktopLongInput name="aboutyou" value={aboutyou} onChange={this.onChange} type="text" placeholder="Tell us about yourself!"/>
            <DesktopLongInput name="interests" value={interests} onChange={this.onChange} type="text" placeholder="List your interests..."/><br/><br/><br/>
            <DesktopButton type="submit">Finish</DesktopButton><br/><br/><br/>
          </form>
			  </Main>
		);
	}
}

export default withRouter(withFirebase(Info));
