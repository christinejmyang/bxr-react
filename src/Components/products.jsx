import React, {Component} from 'react'
import Item from './item'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import Firebase, { FirebaseContext, withFirebase} from './../Firebase'
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

const UnfilledHeart = styled.button`
    font-size: 40px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: none;
`;

const FilledHeart = styled.button`
    font-size: 40px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: red;
`;

const MobileProducts = styled.div`
`;

const DesktopProducts = styled.div`
    font-family: 'Source Sans Pro', sans-serif;
    margin-bottom: 100px;
`;

const Headis = styled.h1`
    font-size: 50px;
    text-align: center;
    font-family: 'Avenir Next', sans-serif;
    margin-top: 5%;
`;

const DesktopItem = styled.div`
    font-weight: bolder;
    text-transform: capitalize;
`;

const DesktopItemRemove = styled.button`
    border: none;
    background-color: transparent;
`;

const ProductsCollection = styled.div`
  margin-top: -100px;
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
      user: null,
      edit: this.false
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
          link: products[product].link,
          image: products[product].image,
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

  handleHeart(id, name, description, price, link, liked, image) {
    this.props.firebase.showDatabase(`/products/${id}`).set({
      id: id,
      description: description,
      name: name,
      price: price,
      link: link,
      image: image,
      liked: !liked
    });
    this.componentDidMount();
  }



  render () {
    var styles = {

    }
    const bookshelfDesktop = (
      <DesktopProducts>
        <Headis> My Products </Headis>
          {this.state.user ?
             <Row gutter={0}>
               {this.state.products.map(product =>
                 <Col span={3}>
                    <Item link={product.link} description={product.description} price={product.price} name={product.name} liked={product.liked} image={product.image}>
                      <DesktopItemRemove>
                        <button onClick={() => this.removeItem(product.id)}>X</button>
                      </DesktopItemRemove>
                      {product.liked === false ?
                          <UnfilledHeart
                            onClick={() =>
                              this.handleHeart(product.id, product.name, product.description, product.price, product.link, product.liked, product.image)}>
                            &hearts; </UnfilledHeart>
                          :
                          <FilledHeart
                            onClick={() =>
                              this.handleHeart(product.id, product.name, product.description, product.price, product.link, product.liked, product.image)}>
                            &hearts; </FilledHeart>
                        }
                    </Item>
                </Col>
             )}
             </Row>
         :
         <div className='wrapper'>
           <p>You must be logged in to view BXR's featured products.</p>
         </div> }
      <br/><br/><br/></DesktopProducts>
    );

    const bookshelfMobile = (
       <MobileProducts>
       <Headis> My Products </Headis>
         {this.state.user ?
           <div>
               {this.state.products.map(product =>
                  <Item link={product.link} description={product.description} price={product.price} name={product.name} liked={product.liked} image={product.image}>
                    <DesktopItemRemove>
                        <button onClick={() => this.removeItem(product.id)}>X</button>
                    </DesktopItemRemove>
                    {product.liked === false ?
                        <UnfilledHeart
                          onClick={() =>
                            this.handleHeart(product.id, product.name, product.description, product.price, product.link, product.liked, product.image)}>
                          &hearts; </UnfilledHeart>
                        :
                        <FilledHeart
                          onClick={() =>
                            this.handleHeart(product.id, product.name, product.description, product.price, product.link, product.liked, product.image)}>
                          &hearts; </FilledHeart>
                      }
                  </Item>
             )}
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
