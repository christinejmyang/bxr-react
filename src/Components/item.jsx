import React, {Component} from 'react'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import Popup from './popup.js'

const DesktopItem = styled.div`
  text-transform: capitalize;
`;

const MobileItem = styled.div`
  text-transform: capitalize;
  text-align: center;
`;

class Item extends Component {
  state = {
    imageUrl: this.props.image,
    name: this.props.name,
    price: this.props.price,
    showPopup: this.false
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    const itemDesktop = (
      <DesktopItem>
        <h2> {this.state.name}, ${this.state.price}</h2>
        <img onClick={this.togglePopup.bind(this)} style={{height: 200, width: 200 }} src={this.state.imageUrl} alt="" />
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
