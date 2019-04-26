import React, { Component } from 'react';
import './../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Media from 'react-media';
import { Section, bodyTextStyle } from './Section.js'
import styled, { css } from '@emotion/styled'
import { withFirebase } from '../Firebase'

const DesktopNav = styled.nav`
    font-family: 'Avenir Next', sans-serif;
`;

const DesktopLogo = styled.a`
    font-family: 'Roboto', sans-serif;
    font-size: 2em;
    color: black;
    float: left;
    margin-top: -0.5%;
    margin-left: 0.5%;
    margin-right: 2%;
    &:hover {
        color: grey;
    }
`;

const DesktopHeader = styled.header`
    width: 100%;
    height: 4%;
    padding: 1.5%;
    background-color: lightcoral;
`;

const DesktopNavLink = styled.a`
    color: black;
    font-weight: 600;
    font-size: 1.2em;
    margin-left: 3%;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        color: grey;
    }
`;

const DesktopDashboard = styled.a`
    color: black;
    font-weight: 600;
    font-size: 1.2em;
    float: right;
    margin-right: 4%;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        color: grey;
    }
`;

const DesktopDropdown = styled.div`
    position: absolute;
    margin-left: -2%;
    padding: 1%;
    width: 8%;
    text-align: center;
    background-color: #eeeeee;
    opacity: 0.9;
	box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`;

const DesktopDropdownLink = styled.a`
    text-align: center;
    color: black;
    font-weight: 400;
    font-size: 0.8em;
    &:hover {
        cursor: pointer;
        font-style: italic;
    }
`;

const SignedInLinksPage = () => (
  <SignedInLinksView/>
)

class SignedInLinks extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        };
        this.logout = this.logout.bind(this);
    }
    
    logout() {
        this.props.firebase
            .doSignOut()
            .then(() => {
                this.setState({
                    user: null
                });
            window.location.href = "/";
            });
    };
    
    handleOpenCloseDropdown() {
        this.setState({
            hidden: !this.state.hidden,
        });
    };
    
    openPopup = () => {
        this.setState({
            isOpen: true
        });
    };

    closePopup = () => {
        this.setState({
            isOpen: false
        });
    };

    render() {
        const { hidden } = this.state;
      
        const SignedInHeaderDesktop = (
            <DesktopNav>
                <DesktopHeader>
                    <DesktopLogo href="/">bxr</DesktopLogo>
                    <DesktopNavLink href="/about">About</DesktopNavLink>
                    <DesktopNavLink href="/products">Products</DesktopNavLink>
                    
                    <DesktopDashboard href="/profile" onMouseOver={() => this.handleOpenCloseDropdown()} onMouseOut={() => this.handleOpenCloseDropdown()}>Dashboard
                        <DesktopDropdown hidden={hidden}>
                            <DesktopDropdownLink>Settings</DesktopDropdownLink><br/><hr style={{border: '1px solid black'}}/>
                            <DesktopDropdownLink onClick={this.logout}>Sign Out</DesktopDropdownLink><br/>
                        </DesktopDropdown>
                    </DesktopDashboard>
                </DesktopHeader>
            </DesktopNav>
        );

        const SignedInHeaderMobile = (
          <nav>
            <ul class="HeaderUl">
              <li class="HeaderLinkBurger">
                <p>
                  <div class="hamburger">
                    <a> &#9776; </a>
                    <div class="dropdown-content">
                      <Link to="/about">About</Link>
                      <Link to="/">My Products</Link>
                      <Link to="/">Sign Out</Link>
                      <div class="dropdown2">
                        <a>Benefits</a>
                        <div class="dropdown-content2">
                          <Link to="/brands">For Brands</Link>
                          <Link to="/hosts">For Hosts</Link>
                          <Link to="/profile">For Renters</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </p>
              </li>
            </ul>
          </nav>
        );

    return (
        <Media query={{ minWidth: 500 }}>
          {matches => (matches ? SignedInHeaderDesktop : SignedInHeaderMobile)}
        </Media>
    );
  }
}

const SignedInLinksView = withFirebase(SignedInLinks);
export default SignedInLinksPage;
export { SignedInLinksView };
