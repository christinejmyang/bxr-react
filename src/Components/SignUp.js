import React, {Component} from 'react'
import Item from './item'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import firebase from './../firebase.js';

const MobileProducts = styled.div`
`;

const DesktopProducts = styled.div`
`;

class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      products: [],
      user: null
    }
  }

  render () {
    const signupDesktop = (
      <DesktopProducts>
        {this.state.products.map(product =>
          <Item key={1} value={product.price} name={product.id} image={"https://picsum.photos/200"}>
            <h4>{product.name}</h4>
            <button onClick={() => this.removeItem(product.id)}>Remove Item</button>
          </Item>)}
      </DesktopProducts>
    );

    const signupMobile = (
      <MobileProducts>
        {this.state.products.map(product =>
          <Item key={2} value={product.price} name={product.id} image={"https://picsum.photos/200"}>
            <h4>{product.name}</h4>
            <button onClick={() => this.removeItem(product.id)}>Remove Item</button>
          </Item>)}
      </MobileProducts>
    );
    return(
      <Section title="">
        <Media query={{ minWidth: 500 }}>
          {matches => (matches ? signupDesktop : signupMobile)}
        </Media>
      </Section>
    );
  }

};

export default SignUp;
