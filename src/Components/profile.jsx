import React, {Component} from 'react'
import Item from './item'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import Firebase, { FirebaseContext, withFirebase} from './../Firebase'

const DesktopProfile = styled.div`
    font-family: 'Avenir Next', sans-serif;
    background-color: white;
    padding: 5%;
    
`;
const DesktopProfileComponent = styled.div`
`;

const DesktopPic = styled.div`
    width: '75px',
    borderRadius: '15em',
    float: 'right',
`;

const DesktopButton = styled.div`
    display: inline-block;
    cursor: pointer;
    float: right;
    background-color: lightcoral;
    width: 55px;
    text-align: center;
    padding: 1%;
    color: white;
    font-weight: bold;
    border-radius: 25px 25px 25px 25px;
`;

const EditLink = styled.a`
    color: white;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        color: grey;
    }
`;

const MobileProfile = styled.div`
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


const ProfilePage = () => (
  <ProfileView/>
)

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            user: this.user
        };
    }
    render () {
        const profileDesktop = (
            <DesktopProfile>
                Welcome!
                <DesktopButton>
                    <EditLink href="/info">EDIT</EditLink>
                </DesktopButton>
                <br/><br/>Joined in April 2019<br/><br/>
                <h2>About You</h2>
                I love BXR!<br/><br/>
                <h2>Interests</h2>
                BXR!<br/><br/>
                <h2>Favorites</h2>
                See more
            </DesktopProfile>
        );

        const profileMobile = (
            <MobileProfile>
              <img src="./../img/christine.jpg"/>
              Welcome, name!
              <MobileButton>
                  EDIT
              </MobileButton>
              <br/><br/>Joined in April 2019<br/><br/>
              <h2>About You</h2>
              I love BXR!<br/><br/>
              <h2>Interests</h2>
              BXR!<br/><br/>
              <h2>Favorites</h2>
              <img></img>
              <img></img>
              <img></img>
              See more
            </MobileProfile>
    );

    return(
      <Section title="">
        <Media query={{ minWidth: 800 }}>
          {matches => (matches ? profileDesktop : profileMobile)}
        </Media>
      </Section>
    );
  }
};

const ProfileView = withFirebase(Profile);
export default ProfilePage;
export { ProfileView };
