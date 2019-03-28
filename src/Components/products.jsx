import React, {Component} from 'react'
import Item from './item'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import firebase from './../firebase.js';

const MobileProducts = styled.div`
`;

const DesktopProducts = styled.h4`
`;

class Products extends Component {

  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('products');
    itemsRef.on('value', (snapshot) => {
      let products = snapshot.val();
      let newState = [];
      for (let item in products) {
        newState.push({
          description: products[item].description,
          name: products[item].name,
          price: products[item].price,
          saved: products[item].saved
        });
      }
      this.setState({
        products: newState
      });
    });
  }

// Old hard-coded data
/*
  state = {
    counters: [
      {name: "Blender",   id: 1, value: 0, img: "https://picsum.photos/200"},
      {name: "Mattress",  id: 2, value: 0, img: "https://picsum.photos/200"},
      {name: "iHome",     id: 3, value: 0, img: "https://picsum.photos/200"},
      {name: "SmartTV",   id: 4, value: 0, img: "https://picsum.photos/200"},
    ]
  };
*/

  render () {
    const bookshelfDesktop = (
      <DesktopProducts>
        {this.state.products.map(item =>
          <Item key={1} value={item.price} image={"https://picsum.photos/200"}>
            <h4>{item.name}</h4>
          </Item>)}
      </DesktopProducts>
    );
    const bookshelfMobile = (
      <MobileProducts>
        {this.state.products.map(item =>
          <Item key={2} value={item.price} image={"https://picsum.photos/200"}>
            <h4>{item.name}</h4>
          </Item>)}
      </MobileProducts>
    );
    return(
      <Section title="">
        <Media query={{ minWidth: 500 }}>
          {matches => (matches ? bookshelfDesktop : bookshelfMobile)}
        </Media>
      </Section>
    );
  }
};

export default Products;
