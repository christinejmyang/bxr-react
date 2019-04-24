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
`;
const MobileBrands = styled.div`
  font-family: 'Avenir Next', sans-serif;
  align-content: center;
  text-align: center;
`;
const DesktopPicture = styled.img`
  padding-top: 50px;
  width: 100px;
`;
const Collection = styled.div`
`;
const Left = styled.div`
  float: left;
`;
const Right = styled.div`
  margin-left: 15%;
  padding-top: 50px;
`;

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
                  - Tim, CMO at BoingoBeds
                </Right>
                <br />
                <Left>
                  <DesktopPicture src={clock} />
                </Left>
                <Right>
                  "BXR perfectly suits our user testing needs. I'm amazing at how much <b><i>faster</i></b> we were able to obtain quality data."
                  <br/><br/>
                  - Jessica, Product Manager at BoostedPogo
                </Right>
                <br />
                <br />
                <Left>
                  <DesktopPicture src={tag} />
                </Left>
                <Right>
                  "If you're still conducting the lionshare of your product research in-house, you seriously need to reconsider. BXR has enabled our
                  company to focus on other, more important tasks while they handle our testing."
                  <br/><br/>
                  - Theodore, CFO at CommercialCaches
                </Right>
              </Collection>
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
