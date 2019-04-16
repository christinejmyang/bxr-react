import React, {Component} from 'react'
import Item from './item'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import firebase, {auth, provider} from './../firebase.js';

const UnfilledHeart = styled.div`
  font-size: 12px;
    border: none;
    background-color: transparent;
`;

const FilledHeart = styled.div`
  font-size: 12px;
    border: none;
    background-color: transparent;
`;

const MobileSignUp = styled.div`
`;

const DesktopSignUp = styled.div`
    font-family: 'Source Sans Pro', sans-serif;
`;

const DesktopItem = styled.div`
    font-weight: bolder;
    text-transform: capitalize;
`;

const DesktopItemRemove = styled.button`
    border: none;
    background-color: transparent;
`;

const profPicStyle = {
  width: '75px',
  borderRadius: '15em',
  float: 'right',
};

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
          favorite: products[product].favorite,
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

  handleHeart(itemId) {
    // const itemRef = firebase.database().ref(`/products/${itemId}`);
    this.setState({liked: !this.state.liked});
  }

  formatLike() {
    const likedHeart = (
      <FilledHeart> &hearts; </FilledHeart>
    );

    const unlikedHeart = (
      <UnfilledHeart> &#9825; </UnfilledHeart>
    );
    return this.state.liked === false ? unlikedHeart : likedHeart;
  }

  render () {
    const bookshelfDesktop = (
      <DesktopSignUp>
         <div>
         {this.state.user ?
           <div style={{marginBottom: 100 + 'px'}}>
            <button onClick={this.logout} class="signOutButton">Sign Out</button>
            <img src={this.state.user.photoURL} style={profPicStyle}/>
           </div>
            :
            <button onClick={this.login} class="signInButton">Sign In With Google</button>
         }
         </div>
         {this.state.user ?
         <div>
           {this.state.products.map(product =>
             <DesktopItem>
                    <Item key={1} price={product.price} name={product.name} favorite={product.favorite} image={"https://picsum.photos/200"}>
                    <br/>
                    <DesktopItemRemove>
                        <button onClick={() => this.removeItem(product.id)}>X</button>
                    </DesktopItemRemove>
                    <button onClick={() => this.handleHeart(product.id)}> {this.formatLike()} </button>
                    </Item>
            </DesktopItem>)}
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
           <button onClick={this.logout} class="signOutButton">Sign Out</button>
           :
           <button onClick={this.login} class="signInButton">Sign In With Google</button>
         }
       </div>
       {this.state.user ?
       <div>
         <div className='user-profile'>
           <img src={this.state.user.photoURL} style={profPicStyle}/>
         </div>
         {this.state.products.map(product =>
           <Item key={2} price={product.price} name={product.name} image={"https://picsum.photos/200"}>
             <button onClick={() => this.removeItem(product.id)}>X</button>
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
        <Media query={{ minWidth: 800 }}>
          {matches => (matches ? bookshelfDesktop : bookshelfMobile)}
        </Media>
      </Section>
    );
  }
};

export default Products;
