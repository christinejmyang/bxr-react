import React, {Component} from 'react'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import Popup from './popup.js'

const DesktopItem = styled.div`
    text-transform: capitalize;
    font-weight: 600;
    font-family: 'Avenir Next', sans-serif;
    margin-bottom: -60%;
`;

const MobileItem = styled.div`
  text-transform: capitalize;
`;

const ItemName = styled.span`
    float: left;
    margin-left: 5%;
`;

const ItemPrice = styled.span`
    float: right;
    margin-right: -8%;
    margin-bottom: 5%;
    font-weight: 400;
`;

const textStyle = {
    marginLeft:'4%',
};

class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageUrl: this.props.image,
      name: this.props.name,
      price: this.props.price,
      showPopup: this.false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    const { imageUrl, name, price, showPopup} = this.state;

    const itemDesktop = (
      <DesktopItem>
        <ItemName>{this.state.name}</ItemName>
        <ItemPrice>${this.state.price}</ItemPrice>
        <img onClick={this.togglePopup.bind(this)} style={{padding:10, border:10, cursor: 'pointer', backgroundColor: 'grey',
                                                           height: 200, width: 200 }} src={this.state.imageUrl} alt="" />
        {this.props.children}
        {this.state.showPopup ?
          <Popup
            text={this.props.name}
            price={this.props.price}
            closePopup={this.togglePopup.bind(this)}
            popupImage={this.props.imageUrl}
            description={this.props.description}
            link={this.props.link}
            image={this.props.image}
          />
          :
          null
        }
      </DesktopItem>
    );

    const itemMobile = (
      <MobileItem>
        <h2>{this.state.name}, ${this.state.price}</h2>
        <img onClick={this.togglePopup.bind(this)} style={{ padding:1, border:10, backgroundColor: 'black',
                                                           height: 200, width: 200 }} src={this.state.imageUrl} alt="" />
        {this.props.children}
        {this.state.showPopup ?
          <Popup
            text={this.props.name}
            price={this.props.price}
            closePopup={this.togglePopup.bind(this)}
            popupImage={this.props.imageUrl}
            description={this.props.description}
            link={this.props.link}
            image={this.props.image}
          />
          : null
        }
      </MobileItem>
    );

    return(
      <Section title="">
        <Media query={{ minWidth: 500 }}>
          {matches => (matches ? itemDesktop : itemMobile)}
        </Media>
      </Section>
    );
  }

}

export default Item;
