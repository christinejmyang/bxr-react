import React, {Component} from 'react'
import Item from './item'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import { withFirebase } from '../Firebase'

const DesktopHosts = styled.div`
    font-family: 'Avenir Next', sans-serif;
    background-color: white;
    width: 100%;
    margin-left: -10%;
    padding: 10%;
    padding-top: 7%;
    padding-bottom: 8%;
`;
const MobileHosts = styled.div`
    font-family: 'Avenir Next', sans-serif;
    background-color: white;
    width: 100%;
    margin-left: -10%;
    padding: 10%;
    padding-top: 7%;
    padding-bottom: 8%;
`;

class Hosts extends Component {

    render () {
        const desktop = (
            <DesktopHosts>
              <h1>Using BXR at Your Property</h1>
              Enhance your property by partnering with BXR! When renters book an AirBnb, VRBO, or HomeAway, they will see whether a property is BXR-equipped or not. Having the BXR badge has produced a 23% higher hit rate
              for renters current using our services.<br/><br/>
            </DesktopHosts>
    );

        const mobile = (
            <MobileHosts>
              <h1>Using BXR at Your Property</h1>
              Enhance your property by partnering with BXR! Visit our sign in page to create an account. Make sure to distinguish that you're a host on the form!<br/><br/>
              <h1>Benefits of BXR</h1>
              When renters book an AirBnb, VRBO, or HomeAway, they will see whether a property is BXR-equipped or not. Having the BXR badge has produced a 23% higher hit rate
              for renters current using our services.<br/><br/>
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
