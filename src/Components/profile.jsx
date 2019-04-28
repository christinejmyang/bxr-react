import React, {Component} from 'react'
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
    font-size: 15px;
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
const MobileButton = styled.a`
    display: inline-block;
    background-color: lightcoral;
    width: 45px;
    float: right;
    text-align: center;
    padding: 1%;
    color: white;
    font-weight: bold;
    border-radius: 25px 25px 25px 25px;
    font-size: 12px;
`;


const ProfilePage = () => (
  <ProfileView/>
)

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            aboutyou: '',
            interests: '',
            user: this.user
        };
    }

    componentDidMount() {
      this.props.firebase
        .doOnAuthStateChanged((user) => {
          if (user) {
            this.setState({ user });
            const currentUser = this.props.firebase.doGetCurrentUser();
            const nameRef = this.props.firebase.showDatabase('users/' + currentUser + '/firstname');
            const aboutRef = this.props.firebase.showDatabase('users/' + currentUser + '/aboutyou');
            const interestsRef = this.props.firebase.showDatabase('users/' + currentUser + '/interests');
            nameRef.on('value', (snapshot) => {
              let firstname = snapshot.val();
              this.setState( {
                firstname: firstname
              });
            });
            aboutRef.on('value', (snapshot) => {
              let aboutyou = snapshot.val();
              this.setState( {
                aboutyou: aboutyou
              });
            });
            interestsRef.on('value', (snapshot) => {
              let interests = snapshot.val();
              this.setState( {
                interests: interests
              });
            });
          }
          else {}
        });
      }

    render () {
        const profileDesktop = (
            <DesktopProfile>
                <h1>Welcome, {this.state.firstname}!
                <DesktopButton>
                    <EditLink href="/info">EDIT</EditLink>
                </DesktopButton>
              </h1>
              <br></br>
                <h2>About You</h2>
                {this.state.aboutyou}<br/><br/>
                <h2>Interests</h2>
                {this.state.interests}<br/><br/>
            </DesktopProfile>
        );

        const profileMobile = (
            <MobileProfile>
              <h1>
                Welcome, {this.state.firstname}!
              <MobileButton href="/info">
                  EDIT
              </MobileButton>
            </h1>
              <h2>About You</h2>
              {this.state.aboutyou}<br/><br/>
              <h2>Interests</h2>
              {this.state.interests}<br/><br/>
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
