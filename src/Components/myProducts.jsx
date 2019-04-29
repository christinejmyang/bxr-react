import React, {Component} from 'react'
import Item from './item.jsx'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import Firebase, { FirebaseContext, withFirebase} from './../Firebase'
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

const UnfilledHeart = styled.button`
    float: right;
    font-size: 1.5em;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: none;
`;

const FilledHeart = styled.button`
    float: left;
    font-size: 1.5em;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: red;
`;

const MobileProducts = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  margin-bottom: 100px;
`;

const DesktopProducts = styled.div`
    font-family: 'Source Sans Pro', sans-serif;
    margin-bottom: 100px;
    text-align: center;
`;

const Headis = styled.h1`
    font-size: 2em;
    text-align: center;
    font-family: 'Avenir Next', sans-serif;
`;

const DesktopItem = styled.div`
    font-weight: bolder;
    text-transform: capitalize;
`;

const DesktopItemRemove = styled.button`
    border: none;
    background-color: transparent;
    margin-top: 1%;
    margin-left: -30%;
`;

const ProductsCollection = styled.div`
  margin-top: -100px;
`;

const profPicStyle = {
  width: '75px',
  borderRadius: '15em',
  float: 'center',
};

const Collection = styled.div`
  flex-direction: column;
  text-align: center;
`;

const Child = styled.div`
  text-transform: capitalize;
`;

const DesktopButton = styled.a`
  cursor: pointer;
  text-align: center;
  color: black;
  font-weight: bold;
  font-size: 2em;
    float: left;
`;



const MyProductsPage = () => (
  <MyProductsView />
)

class MyProducts extends Component {

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
          this.setState({ user });
          const currentUser = this.props.firebase.doGetCurrentUser();
          const productsRef = this.props.firebase.showDatabase('/users/' + currentUser + '/products/');
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

  removeItem(itemId) {
    const currentUser = this.props.firebase.doGetCurrentUser();
    const itemRef = this.props.firebase.showDatabase('/users/' + currentUser + '/products/' + itemId);
    itemRef.remove();
  }

  handleHeart(id, name, description, price, link, liked, image) {
    const currentUser = this.props.firebase.doGetCurrentUser();
    this.props.firebase.showDatabase('/users/' + currentUser + '/products/' + id).update({
      liked: !liked
    });
    this.componentDidMount();
  }



  render () {
    const bookshelfDesktop = (
      <DesktopProducts>
        <Headis> My Products </Headis>
          <ProductsCollection>
             <Row gutter={0}>
               {this.state.products.map(product =>
                 <Col span={3}>
                    <Item link={product.link} description={product.description} price={product.price} name={product.name} liked={product.liked} image={product.image}>
                      <DesktopItemRemove>
                        <DesktopButton onClick={() => this.removeItem(product.id)}>X</DesktopButton>
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
          </ProductsCollection>
      <br/><br/><br/></DesktopProducts>
    );

    const bookshelfMobile = (
       <MobileProducts>
       <Headis> My Products </Headis>
           <Collection>
               {this.state.products.map(product =>
                 <Child>
                  <Item link={product.link} description={product.description} price={product.price} name={product.name} liked={product.liked} image={product.image}>
                    <DesktopItemRemove>
                        <DesktopButton onClick={() => this.removeItem(product.id)}>X</DesktopButton>
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
                </Child>
             )}
           </Collection>
      </MobileProducts>
    );

    return(
      <Section title="">
        <Media query={{ minWidth: 1020 }}>
          {matches => (matches ? bookshelfDesktop : bookshelfMobile)}
        </Media>
      </Section>
    );
  }
};

const MyProductsView = withFirebase(MyProducts);

export default MyProductsPage;
export { MyProductsView };
