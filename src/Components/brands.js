import React, {Component} from 'react'
import Item from './item'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import { withFirebase } from '../Firebase'

const DesktopBrands = styled.div`
    font-family: 'Avenir Next', sans-serif;
    background-color: white;
    width: 100%;
    margin-left: -10%;
    padding: 10%;
    padding-top: 7%;
    padding-bottom: 8%;
`;
const ContactLink = styled.a`
    color: lightcoral;
    font-weight: 600;
    margin-left: 1%;
    cursor: pointer;
    &:hover {
        color: grey;
    }
`;
const MobileBrands = styled.div`
    font-family: 'Avenir Next', sans-serif;
    background-color: white;
    width: 100%;
    margin-left: -10%;
    padding: 10%;
    padding-top: 7%;
    padding-bottom: 8%;
`;


class Brands extends Component {

    render () {
        const desktop = (
            <DesktopBrands>
                <h1>BXR and Your Brand</h1>
                Tap into valuable consumer insights by partnering with us! Buying household essentials for guests is tedious, so why not do the job for them? By offering your products to Airbnb hosts, you can have cheap, insightful access to keen user data.<br/><br/>
                <h2><i>Your Relationship with BXR</i></h2>
                As soon as a renter stays at an Airbnb, they'll be able to use any product that the rental host has at their home. If they wish to use your product and/or receive a discount on an online purchase, they'll fill out a survey detailing their experience with the product(s). Then, we'll be able to send live data to your team from our end!<br/><br/>
                <h2><i>Your Relationship with Users</i></h2>
                Not only are you able to market to users directly, but your company can find out more about its users at a low cost. BXR offers the most powerful and cost-effective way to increase your brand exposure in the physical space, and gain extremely insightful user data in exchange.<br/><br/><br/>
                <i>Interested? Still have questions?</i><ContactLink href="mailto:inquiries@bxr.com">Contact us!</ContactLink>
            </DesktopBrands>
    );

        const mobile = (
            <MobileBrands>
                <h1>Benefits of BXR</h1>
                Tap into valuable consumer insights by partnering with BXR! Buying household essentials for guests is tedious, so why not do the job for them? By offering your products to Airbnb hosts, you can have cheap, insightful access to keen user data.<br/><br/>
                <h2><i>Your Relationship with BXR</i></h2>
                As soon as a renter stays at an Airbnb, they'll be able to use any product that the rental host has at their home. If they wish to use your product and/or receive a discount on an online purchase, they'll fill out a survey detailing their experience with the product(s). Then, we'll be able to send live data to your team from our end!<br/><br/>
                <h2><i>Your Relationship with Users</i></h2>
                Not only are you able to market to users directly, but your company can find out more about its users at a low cost. BXR offers the most powerful and cost-effective way to increase your brand exposure in the physical space, and gain extremely insightful user data in exchange.<br/><br/><br/>
                <i>Interested? Still have questions?</i><ContactLink href="mailto:inquiries@bxr.com">Contact us!</ContactLink>
            </MobileBrands>
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

export default Brands;
