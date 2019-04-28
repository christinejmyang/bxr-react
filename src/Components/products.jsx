import React, {Component} from 'react'
import Item from './item.jsx'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import Firebase, { FirebaseContext, withFirebase} from './../Firebase'
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

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

const DesktopItemRemove = styled.div`
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

const DesktopItemAdd = styled.button`
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
      edit: this.false
    };
  }

  componentDidMount() {
    this.props.firebase
      .doOnAuthStateChanged((user) => {
        if (user) {
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
      });
  }

  addItem(id, description, name, price, link, image, liked) {
    const currentUser = this.props.firebase.doGetCurrentUser()
    this.props.firebase.showDatabase('/users/' + currentUser + '/products/' + id).set({
      name: name,
      description: description,
      name: name,
      price: price,
      link: link,
      image: image,
      liked: liked
    });
  }


  render () {
    const bookshelfDesktop = (
      <DesktopProducts>
        <Headis> Products </Headis>
             <Row gutter={0}>
               {this.state.products.map(product =>
                 <Col span={3}>
                    <Item link={product.link} description={product.description} price={product.price} name={product.name} liked={product.liked} image={product.image}>
                      <DesktopItemRemove>
                      <button onClick={() => this.addItem(product.id, product.description, product.name, product.price, product.link, product.image, product.liked)}>
                        ADD
                      </button>
                      </DesktopItemRemove>
                      </Item>
                </Col>
             )}
             </Row>
           </DesktopProducts>
    );

    const bookshelfMobile = (
       <MobileProducts>
       <Headis> Products </Headis>
           <div>
               {this.state.products.map(product =>
                  <Item link={product.link} description={product.description} price={product.price} name={product.name} liked={product.liked} image={product.image}>
                    <DesktopItemRemove>
                        <button onClick={() => this.addItem(product.id, product.description, product.name, product.price, product.link, product.image, product.liked)}>ADD</button>
                    </DesktopItemRemove>
                  </Item>
             )}
           </div>
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
