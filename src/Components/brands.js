import React, {Component} from 'react'
import Item from './item'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import { withFirebase } from '../Firebase'
import userdata from './../img/userdata.svg'
import clock from './../img/clock.svg'
import tag from './../img/tag.svg'

const DesktopBrands = styled.div`
    font-family: 'Avenir Next', sans-serif;
    background-color: white;
    width: 100%;
    margin-left: -10%;
    padding: 10%;
    padding-top: 7%;
    padding-bottom: 8%;
`;
const DesktopPicture = styled.img`
  padding-top: 50px;
  width: 100px;
`;
const MobileBrands = styled.div`
  font-family: 'Avenir Next', sans-serif;
  align-content: center;
  text-align: center;
`;
const Collection = styled.div`
`;
const Left = styled.div`
  float: left;
`;
const Right = styled.div`
  margin-left: 15%;
  padding-top: 6%;
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
//const MobileBrands = styled.div`
//    font-family: 'Avenir Next', sans-serif;
//    background-color: white;
//    width: 100%;
//    margin-left: -10%;
//    padding: 10%;
//    padding-top: 7%;
//    padding-bottom: 8%;
//`;


class Brands extends Component {

    render () {
        const desktop = (
            <DesktopBrands>
              <h1>BXR for Brands</h1>
              Enhance your brand by partnering with BXR! Here are some reasons why other brands are switching to BXR...
              <Collection>
                <Left>
                  <DesktopPicture src={userdata} />
                </Left>
                <Right>
                  "BXR provided quality data at a huge cost savings. Their service allows us to easily conduct final-stage product testing
                  while getting insights that we trust. I highly recommend partnering with BXR if you want <b><i>better, cheaper</i></b> data."
                  <br/><br/>
                  — Tim, CMO at BoingoBeds
                </Right>
                <br />
                <Left>
                  <DesktopPicture src={clock} />
                </Left>
                <Right>
                  "BXR perfectly suits our user testing needs. I'm amazing at how much <b><i>faster</i></b> we were able to obtain quality data."
                  <br/><br/>
                  — Jessica, Product Manager at BoostedPogo
                </Right>
                <br/>

                <Left>
                  <DesktopPicture src={tag} />
                </Left>
                <Right>
                  "If you're still conducting the lionshare of your product research in-house, you seriously need to reconsider. BXR has enabled our
                  company to focus on other, more important tasks while they handle our testing."
                  <br/><br/>
                  — Theodore, CFO at CommercialCaches
                </Right><br/><br/><br/>
              </Collection>
            <hr style={{border: '1px dashed coral'}}/><br/>
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
              <h1>BXR for Brands</h1>
              Enhance your brand by partnering with BXR! Here are some reasons why other brands are switching to BXR...
              <Collection>
                <div>
                  <DesktopPicture src={userdata} />
                </div>
                <div>
                  "BXR provided quality data at a huge cost savings. Their service allows us to easily conduct final-stage product testing
                  while getting insights that we trust. I highly recommend partnering with BXR if you want <b><i>better, cheaper</i></b> data."
                  <br/><br/>
                  - Tim, CMO at BoingoBeds
                </div>
                <br />
                <div>
                  <DesktopPicture src={clock} />
                </div>
                <div>
                  "BXR perfectly suits our user testing needs. I'm amazing at how much <b><i>faster</i></b> we were able to obtain quality data."
                  <br/><br/>
                  - Jessica, Product Manager at BoostedPogo
                </div>
                <br />

                <div>
                  <DesktopPicture src={tag} />
                </div>
                <div>
                  "If you're still conducting the lionshare of your product research in-house, you seriously need to reconsider. BXR has enabled our
                  company to focus on other, more important tasks while they handle our testing."
                  <br/><br/>
                  - Theodore, CFO at CommercialCaches
                </div>
              </Collection>
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
