import React, {Component} from 'react'
import Item from './item'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import firebase, {auth, provider} from './../firebase.js';

const MobileProducts = styled.div`
`;

const DesktopProducts = styled.div`
`;

const MobileSignUp = styled.div`
`;

const DesktopSignUp = styled.div`
`;

class Products extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      products: [],
      user: null
    }
    this.login = this.login.bind(this); // <-- add this line
    this.logout = this.logout.bind(this); // <-- add this line
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
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

  render () {
    const bookshelfDesktop = (
      <DesktopSignUp>
         <div>
           {this.state.user ?
             <button onClick={this.logout}>Log Out</button>
             :
             <button onClick={this.login}>Log In</button>
           }
         </div>
         {this.state.user ?
         <div>
           <div className='user-profile'>
             <img src={this.state.user.photoURL} />
           </div>
           {this.state.products.map(product =>
             <Item key={1} value={product.price} name={product.id} image={"https://picsum.photos/200"}>
               <h4>{product.name}</h4>
               <button onClick={() => this.removeItem(product.id)}>Remove Item</button>
             </Item>)}
         </div>
         :
         <div className='wrapper'>
           <p>You must be logged in to view BXR's featured products.</p>
         </div> }
      </DesktopSignUp>
    );
    const bookshelfMobile = (
       <MobileSignUp>
       <div>
         {this.state.user ?
           <button onClick={this.logout}>Log Out</button>
           :
           <button onClick={this.login}>Log In</button>
         }
       </div>
       {this.state.user ?
       <div>
         <div className='user-profile'>
           <img src={this.state.user.photoURL} />
         </div>
         {this.state.products.map(product =>
           <Item key={2} value={product.price} name={product.id} image={"https://picsum.photos/200"}>
             <h4>{product.name}</h4>
             <button onClick={() => this.removeItem(product.id)}>Remove Item</button>
           </Item>)}
       </div>
       :
       <div className='wrapper'>
         <p>You must be logged in to view BXR's featured products.</p>
       </div> }
      </MobileSignUp>
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
