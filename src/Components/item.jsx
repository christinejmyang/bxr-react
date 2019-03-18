import React, {Component} from 'react'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';

const DesktopItem = styled.div`
  text-align: center;
`;

const MobileItem = styled.div`
  text-align: center;
`;

const UnfilledHeart = styled.div`
  font-size: 40px;
`;

const FilledHeart = styled.div`
  font-size: 40px;
`;

class Item extends Component {
  state = {
    imageUrl: this.props.image,
    liked: false
  };

  handleHeart = () => {
    this.setState({liked: !this.state.liked});
  }

  styles = {
    fontSize: 100,
    fontWeight: "bold"
  };

  render() {
    const itemDesktop = (
      <DesktopItem>
        <img style={{ padding: 10 }} src={this.state.imageUrl} alt="" />
        {this.props.children}
        <button onClick={this.handleHeart}> {this.formatLike()} </button>
      </DesktopItem>
    );

    const itemMobile = (
      <MobileItem>
        <img style={{ padding: 10 }} src={this.state.imageUrl} alt="" />
        {this.props.children}
        <button onClick={this.handleHeart}> {this.formatLike()} </button>
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

  formatLike() {
    const likedHeart = (
      <FilledHeart> &hearts; </FilledHeart>
    );

    const unlikedHeart = (
      <UnfilledHeart> &#9825; </UnfilledHeart>
    );
    return this.state.liked === false ? unlikedHeart : likedHeart;
  }
}

export default Item;
