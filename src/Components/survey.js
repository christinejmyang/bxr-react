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
const DesktopButton = styled.button`
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

class Survey extends Component {

    render () {
        const desktop = (
            <DesktopSurvey>
              <img src="./../img/christine.jpg"/>
              Welcome, name!
              <DesktopButton>
                  EDIT
              </DesktopButton>
              <br/><br/>Joined in April 2019<br/><br/>
              <h2>About You</h2>
              I'm originally from Seoul, South Korea, and now live in central Florida. At Duke, I'm a junior studying Computer Science, VMS, and Psychology. I love dancing and trying new food, and can fit my arm in a vending machine!<br/><br/>
              <h2>Interests</h2>
              Dancing, designing, listening to music, watching TV, trying new restaurants<br/><br/>
              <h2>Favorites</h2>
              <img></img>
              <img></img>
              <img></img>
              See more
          </DesktopSurvey>
    );

        const mobile = (
            <MobileSurvey>
              <img src="./../img/christine.jpg"/>
              Welcome, name!
              <MobileButton>
                  EDIT
              </MobileButton>
              <br/><br/>Joined in April 2019<br/><br/>
              <h2>About You</h2>
              I'm originally from Seoul, South Korea, and now live in central Florida. At Duke, I'm a junior studying Computer Science, VMS, and Psychology. I love dancing and trying new food, and can fit my arm in a vending machine!<br/><br/>
              <h2>Interests</h2>
              Dancing, designing, listening to music, watching TV, trying new restaurants<br/><br/>
            <h2>Favorites</h2>
              <img></img>
              <img></img>
              <img></img>
              See more
            </MobileSurvey>
    );

    return(
      <Section title="">
        <Media query={{ minWidth: 800 }}>
          {matches => (matches ? desktop : mobile)}
        </Media>
      </Section>
    );
  }
};

export default Survey;
