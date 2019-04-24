import React, { Component } from 'react';
import './../App.css';
import Popup from './signinpopup.js'
import SignIn from './signin.js'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Media from 'react-media';
import { Section, bodyTextStyle } from './Section.js'
import styled, { css } from '@emotion/styled'

const DesktopNav = styled.nav`
    font-family: 'Avenir Next', sans-serif;
    z-index: 1;
    position: fixed;
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

const DesktopSignInLink = styled.a`
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
    margin-left: 5.8%;
    margin-top: 0.1%;
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

class SignedOutLinks extends Component {

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

    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            isOpen: false
        };
    };

    render() {
        const { hidden } = this.state;
        const { isOpen } = this.state;
        const SignedInHeaderDesktop = (
            <DesktopNav>
                <DesktopHeader>
                    <DesktopLogo href="/">bxr</DesktopLogo>

                    <DesktopNavLink onMouseOver={() => this.handleOpenCloseDropdown()} onMouseOut={() => this.handleOpenCloseDropdown()}>Benefits
                        <DesktopDropdown hidden={hidden}>
                            <DesktopDropdownLink href="/brands">For Brands</DesktopDropdownLink><br/><hr style={{border: '1px solid black'}}/>
                            <DesktopDropdownLink href="/products">For Hosts</DesktopDropdownLink><br/><hr style={{border: '1px solid black'}}/>
                            <DesktopDropdownLink href="/profile">For Renters</DesktopDropdownLink><br/>
                        </DesktopDropdown>
                    </DesktopNavLink>

                    <DesktopNavLink href="/about">About</DesktopNavLink>
                    <DesktopSignInLink onClick={this.openPopup}>Sign In</DesktopSignInLink>
                        <Popup show={this.state.isOpen} onClose={this.closePopup}>
                            <SignIn></SignIn>
                        </Popup>
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
                      <Link to="/signin">Sign In</Link>
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

export default SignedOutLinks;
