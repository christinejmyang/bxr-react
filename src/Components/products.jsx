import React, {Component} from 'react'
import Item from './item'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import Firebase, { FirebaseContext, withFirebase} from './../Firebase'

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

const DesktopProducts = styled.div`
    font-family: 'Avenir Next', sans-serif;
    margin-top: -20%;
`;

const DesktopItem = styled.div`
    font-weight: bolder;
    text-transform: capitalize;
    background-color: red;
    width: 30%;
    margin-top: -10%;
    height: 300px;
    display: grid;
    grid-template-columns: auto auto auto auto auto;
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
    this.login = this.login.bind(this); // <-- add this line
    this.logout = this.logout.bind(this); // <-- add this line
  }

  login() {
    this.props.firebase
      .doSignInWithPopup(this.provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  logout() {
    this.props.firebase
      .doSignOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
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
          link: products[product].link
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
