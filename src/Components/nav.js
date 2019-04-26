import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import SignedInLinks from './signedInLinks.js'
import SignedOutLinks from './signedOutLinks.js'
import styled from '@emotion/styled';
import Firebase, { FirebaseContext, withFirebase} from './../Firebase'

const DesktopNav = styled.nav`
`;

const NavPage = () => (
  <NavView />
)
    
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }
    componentDidMount() {
        this.props.firebase
            .doOnAuthStateChanged((user) => {
                if (user) {
                    this.setState({ user });
                }
            });
    }
    render() {
        const NavBarDesktop = (
            <DesktopNav>
                {this.state.user ?
                 <SignedInLinks/>
                 :
                 <SignedOutLinks/>
                }
            </DesktopNav>
        );
        const NavBarMobile = (
            <div>
            {this.state.user ?
             <SignedInLinks/>
             :
             <SignedOutLinks/>
            }
            </div>
        );
        return (
            <Section title="">
            <Media query={{ minWidth: 800 }}>
                {matches => (matches ? NavBarDesktop : NavBarMobile)}
            </Media>
            </Section>
        );
    }
}

const NavView = withFirebase(Nav);

export default NavPage;
export { NavView };