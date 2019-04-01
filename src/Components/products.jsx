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

class Products extends Component {

  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    const productsRef = firebase.database().ref('products');
    productsRef.on('value', (snapshot) => {
      let products = snapshot.val();
      let newState = [];
      for (let product in products) {
        newState.push({
          id: product,
          description: products[product].description,
          name: products[product].name,
          price: products[product].price,
          saved: products[product].saved
        });
      }
      this.setState({
        products: newState
      });
    });
  }

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/products/${itemId}`);
    itemRef.remove();
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
        {this.state.products.map(product =>
          <Item key={1} value={product.price} name={product.id} image={"https://picsum.photos/200"}>
            <h4>{product.name}</h4>
            <button onClick={() => this.removeItem(product.id)}>Remove Item</button>
          </Item>)}
      </DesktopProducts>
    );
    const bookshelfMobile = (
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
          {matches => (matches ? bookshelfDesktop : bookshelfMobile)}
        </Media>
      </Section>
    );
  }
};

export default Products;
