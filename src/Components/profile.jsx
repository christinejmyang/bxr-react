import React, {Component} from 'react'
import Item from './item'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import { withFirebase } from '../Firebase'

const MobileProfile = styled.div`
`;

const DesktopProfile = styled.div`
    font-family: 'Source Sans Pro', sans-serif;
    background-color: white;
    width: 110%;
    margin-left: -10%;
    padding: 5%;
`;
const DesktopButton = styled.div`
    display: inline-block;
    margin-left: 78%;
    background-color: lightcoral;
    width: 5%;
    text-align: center;
    padding: 1%;
    color: white;
    font-weight: bold;
    border-radius: 25px 25px 25px 25px
`;
const DesktopProfPic = styled.div`
    font-family: 'Avenir Next', sans-serif;
`;

class Profile extends Component {

    render () {
        const profileDesktop = (
            <DesktopProfile>
                <DesktopProfPic>
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
                </DesktopProfPic>
            </DesktopProfile>
    );

        const profileMobile = (
            <MobileProfile>

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

export default Profile;
