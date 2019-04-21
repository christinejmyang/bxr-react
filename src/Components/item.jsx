import React, {Component} from 'react'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import Popup from './popup.js'

const DesktopItem = styled.div`
`;

const MobileItem = styled.div`
  text-align: center;
`;

const textStyle = {
  marginLeft:'10px',
};

class Item extends Component {
  state = {
    imageUrl: this.props.image,
    name: this.props.name,
    price: this.props.price,
    showPopup: this.false
  };

  styles = {
    fontSize: 100,
    fontWeight: "bold"
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    const itemDesktop = (
      <DesktopItem>
        <h4 style={textStyle}>{this.state.name}, ${this.state.price}</h4>
        <img onClick={this.togglePopup.bind(this)} style={{ padding: 10 }} src={this.state.imageUrl} alt="" />
        {this.props.children}
        {this.state.showPopup ?
          <Popup
            text={this.props.name}
            price={this.props.price}
            closePopup={this.togglePopup.bind(this)}
            popupImage={this.props.imageUrl}
            description={this.props.description}
            link={this.props.link}
          />
          : null
        }
        <br/>
      </DesktopItem>
    );

    const itemMobile = (
      <MobileItem>
        <img style={{ padding: 10 }} src={this.state.imageUrl} alt="" />
        {this.props.children}
        <h4 style={textStyle}>{this.state.name}, {this.state.price}</h4>
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
