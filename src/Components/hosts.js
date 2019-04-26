import React, {Component} from 'react'
import Item from './item'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import { withFirebase } from '../Firebase'
import eye from './../img/eye-scan.svg'
import coin from './../img/coin.svg'
import stars from './../img/five-stars.svg'

const DesktopHosts = styled.div`
    font-family: 'Avenir Next', sans-serif;
`;
const DesktopPicture = styled.img`
  padding-top: 50px;
  width: 100px;
`;
const MobileHosts = styled.div`
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
  padding-top: 50px;
`;

class Hosts extends Component {

    render () {
        const desktop = (
            <DesktopHosts>
              <h1>BXR for Hosts</h1>
              Enhance your property by partnering with BXR! Here are some reasons why other Hosts are switching to BXR...
              <Collection>
                <Left>
                  <DesktopPicture src={eye} />
                </Left>
                <Right>
                  "Partnering with BXR to make our property a Brand Experience Room has boosted our bookings by 42%. Customers <b><i>see the BXR badge </i></b>
                   and associate it with a superior experience."
                  <br/><br/>
                  - Amy, AirBnb Host
                </Right>
                <br />
                <Left>
                  <DesktopPicture src={coin} />
                </Left>
                <Right>
                  "I'm in awe at how BXR has transformed my property. I can't even remember the last time I wasn't booked! BXR has done wonders for
                  my <b><i>revenue, </i></b> and it's easy to undestand why."
                  <br/><br/>
                  - Daniel, VRBO Host
                </Right>
                <br />
                <Left>
                  <DesktopPicture src={stars} />
                </Left>
                <Right>
                  "My properties have seen an amazing transformation since I partnered with BXR. The average ratings have gone up by a full star -- and
                  I haven't <b><i>invested a penny! </i></b> I highly recommend using this service before you get left behind!"
                  <br/><br/>
                  - Veronica, HomeAway Host
                </Right>
              </Collection>
            </DesktopHosts>
    );

        const mobile = (
            <MobileHosts>
              <h1>BXR for Hosts</h1>
              Enhance your property by partnering with BXR! Here are some reasons why other Hosts are switching to BXR...
              <Collection>
                <div>
                  <DesktopPicture src={eye} />
                </div>
                <div>
                  "Partnering with BXR to make our property a Brand Experience Room has boosted our bookings by 42%. Customers <b><i>see the BXR badge </i></b>
                   and associate it with a superior experience."
                  <br/><br/>
                  - Amy, AirBnb Host
                </div>
                <br />
                <div>
                  <DesktopPicture src={coin} />
                </div>
                <div>
                  "I'm in awe at how BXR has transformed my property. I can't even remember the last time I wasn't booked! BXR has done wonders for
                  my <b><i>revenue, </i></b> and it's easy to undestand why."
                  <br/><br/>
                  - Daniel, VRBO Host
                </div>
                <br />

                <div>
                  <DesktopPicture src={stars} />
                </div>
                <div>
                  "My properties have seen an amazing transformation since I partnered with BXR. The average ratings have gone up by a full star -- and
                  I haven't <b><i>invested a penny! </i></b> I highly recommend using this service before you get left behind!"
                  <br/><br/>
                  - Veronica, HomeAway Host
                </div>
              </Collection>
            </MobileHosts>
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

export default Hosts;
