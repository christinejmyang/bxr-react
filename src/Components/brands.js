import React, {Component} from 'react'
import Item from './item'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import { withFirebase } from '../Firebase'

const DesktopBrands = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
`;
const MobileBrands = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
`;

class Brands extends Component {

    render () {
        const desktop = (
            <DesktopBrands>
              <h1>Using BXR at Your Property</h1>
              Enhance your property by partnering with BXR! Visit our sign in page to create an account. Make sure to distinguish that you're a host on the form!<br/><br/>
              <h1>Benefits of BXR</h1>
              When renters book an AirBnb, VRBO, or HomeAway, they will see whether a property is BXR-equipped or not. Having the BXR badge has produced a 23% higher hit rate
              for renters current using our services.<br/><br/>
            </DesktopBrands>
    );

        const mobile = (
            <MobileBrands>
              <img src="./../img/christine.jpg"/>
              Welcome, name!
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
