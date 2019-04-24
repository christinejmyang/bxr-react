import React, {Component} from 'react'
import Item from './item'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import Firebase, { FirebaseContext, withFirebase} from './../Firebase'
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

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

const MobileProducts = styled.div`
`;

const DesktopProducts = styled.div`
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
  float: 'center',
};

const ProductsPage = () => (
  <ProductsView />
)

class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      products: [],
      user: null
    };
  }

  componentDidMount() {
    this.props.firebase
      .doOnAuthStateChanged((user) => {
        if (user) {
          this.setState({ user });
        }
      });
    const productsRef = this.props.firebase.showDatabase('products');
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
          saved: products[product].saved,
          link: products[product].link,
          liked: products[product].liked
        });
      }
      this.setState({
        products: newState
      });
    });
  }

  removeItem(itemId) {
    const itemRef = this.props.firebase.showDatabase(`/products/${itemId}`);
    itemRef.remove();
  }

  handleHeart(itemId) {
    const itemRef = this.props.firebase.showDatabase('products');

  }

  formatLike() {
    const likedHeart = (
      <FilledHeart> &hearts; </FilledHeart>
    );

    const unlikedHeart = (
      <UnfilledHeart> &#9825; </UnfilledHeart>
    );
    return this.props.liked === false ? unlikedHeart : likedHeart;
  }


  render () {
    const bookshelfDesktop = (
      <DesktopProducts>
         {this.state.user ?
             <Row gutter={40}>
               {this.state.products.map(product =>
                 <Col span={3}>
                   <DesktopItem>
                        <Item key={1} link={product.link} description={product.description} price={product.price} name={product.name} liked={product.liked} image={"https://picsum.photos/200"}>
                        <DesktopItemRemove>
                            <button onClick={() => this.removeItem(product.id)}>X</button>
                        </DesktopItemRemove>
                        <button onClick={() => this.handleHeart(product.id)}> {this.formatLike()} </button>
                        </Item>
                  </DesktopItem>
                </Col>
             )}
             </Row>
         :
         <div className='wrapper'>
           <p>You must be logged in to view BXR's featured products.</p>
         </div> }
      </DesktopProducts>
    );

    const bookshelfMobile = (
       <MobileProducts>
         <div>
           {this.state.user ?
             <div style={{marginBottom: 100 + 'px'}}>
              <img src={this.state.user.photoURL} style={profPicStyle}/>
              <h2>Welcome, {this.state.user.name}</h2>
             </div>
             :
             <div></div>
           }
         </div>
         {this.state.user ?
         <div>
           {this.state.products.map(product =>
             <Item key={2} price={product.price} name={product.name} image={"https://picsum.photos/200"}>
               <button onClick={() => this.removeItem(product.id)}>X</button>
             </Item>)}
         </div>
         :
         <div className='wrapper'>
           <p>You must be logged in to view BXR's featured products.</p>
         </div> }
      </MobileProducts>
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

const ProductsView = withFirebase(Products);

export default ProductsPage;
export { ProductsView };
