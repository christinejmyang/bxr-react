import React, {Component} from 'react'
import Media from 'react-media'
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled'
import SignIn from './signin.js'
import { withFirebase } from '../Firebase'
import { compose } from 'recompose';

const DesktopSurvey = styled.div`
    font-family: 'Avenir Next', sans-serif;
`;
const SurveyButton = styled.button`
    display: inline-block;
    float: right;
    background-color: lightcoral;
    width: 55px;
    text-align: center;
    padding: 1%;
    color: white;
    font-weight: bold;
    border-radius: 25px 25px 25px 25px;
`;
const MobileSurvey = styled.div`
  font-family: 'Avenir Next', sans-serif;
`;
const MobileButton = styled.button`
    display: inline-block;
    background-color: lightcoral;
    width: 45px;
    float: right;
    text-align: center;
    padding: 1%;
    color: white;
    font-weight: bold;
    border-radius: 25px 25px 25px 25px;
`;

const Main = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
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
  product: '',
  experience: null,
  likeliness: null,
  recommendations: '',
};

class Survey extends Component {

  constructor(props) {
      super(props);
      this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {

    if (this.props.location.state != null) {
      const { productName } = this.props.location.state
      this.setState( {
        product: productName
      });
    }
    else {
      this.setState( {
        product: ''
      });
    }
  }

  onSubmit = event => {
      const { product, experience, likeliness, recommendations} = this.state;
      const currentUser = this.props.firebase.doGetCurrentUser();

      this.props.firebase
        .doSubmitSurvey(product, experience, likeliness, recommendations, currentUser)
        .then(() => {
          this.props.history.push("/myproducts");
        })
        .catch(error => {
          this.setState({ error });
        });

      event.preventDefault();
  };

  onChange = event => {
      this.setState({ [event.target.name]: event.target.value });
  };

    render () {
        const { product, experience, likeliness, recommendations} = this.state;
        const desktop = (
          <Main>
            Let us know what you thought! Fill out the short form below.
            <form onSubmit={this.onSubmit}>
              <DesktopInput name="product" value={product} type="text" placeholder={product} readonly/><br/>
              <DesktopInput name="experience" value={experience} onChange={this.onChange} type="number" min="1" max="5" placeholder="Rate your overall experience (1-5 scale)..."/><br/>
              <DesktopInput name="likeliness" value={likeliness} onChange={this.onChange} type="number" min="1" max="5" placeholder="Rate your likeliness to recommend to others (1-5 scale)..."/><br/>
              <DesktopInput name="recommendations" value={recommendations} onChange={this.onChange} type="text" placeholder="Leave any recommendations or suggested improvements..."/><br/><br/><br/>
              <DesktopButton type="submit">Finish</DesktopButton><br/><br/>
            </form>
          </Main>
        );

        const mobile = (
          <Main>
            Let us know what you thought! Fill out the short form below.
            <form onSubmit={this.onSubmit}>
              <DesktopInput name="product" value={product} type="text" placeholder={product} readonly/><br/>
              <DesktopInput name="experience" value={experience} onChange={this.onChange} type="number" min="1" max="5" placeholder="Rate your overall experience (1-5 scale)..."/><br/>
              <DesktopInput name="likeliness" value={likeliness} onChange={this.onChange} type="number" min="1" max="5" placeholder="Rate your likeliness to recommend to others (1-5 scale)..."/><br/>
              <DesktopInput name="recommendations" value={recommendations} onChange={this.onChange} type="text" placeholder="Leave any recommendations or suggested improvements..."/><br/><br/><br/>
              <DesktopButton type="submit">Finish</DesktopButton><br/><br/>
            </form>
          </Main>
        );

    return(
      <Media query={{ minWidth: 800 }}>
        {matches => (matches ? desktop : mobile)}
      </Media>
    );
  }
};

export default withRouter(withFirebase(Survey));
