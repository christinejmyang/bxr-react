import React, {Component} from 'react'
import Item from './item'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled'

const Pup = styled.div`
  position: fixed;
	z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
  font-family: 'Avenir Next', sans-serif;
  text-transform: none;
`;

const PupInner = styled.div`
  position: fixed;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  background: white;
	text-align: center;
`;

const Title = styled.h1`
  color: black;
  text-decoration: underline;
  position: relative;
  text-transform: capitalize;
`;

const Description = styled.span`
  float: left;
  margin-left: 2%;
  font-size: 22px;
  color: black;
  font-family: 'Source Sans Pro', sans-serif;
  margin-right: 50%;
  text-align: left;
  position: relative;
`;

const Picture = styled.img`
  float: right;
  position: fixed;
  top: 300px;
  left: 800px;
  width: 200px;
  height: 200px;
`;

const Link = styled.a`
  color: blue;
  text-decoration: underline;
  position: absolute;
  padding-top: 50px;
`;

const Button = styled.div`
  background-color: #fff;
  border: 3px solid #999;
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  font-family: arial;
  font-weight: bold;
  position: absolute;
  top: -20px;
  right: -20px;
  font-size: 25px;
  width: 30px;
  height: 30px;
  text-align: center;
`;

class Popup extends Component {


  render() {
    return (
      <Pup>
        <PupInner>
          <Title>{this.props.text}, ${this.props.price}</Title>
          <Description>{this.props.description}
          <br></br>
          <Link href={this.props.link} target="_blank">Buy Here</Link>
          </Description>
          <Picture src={this.props.image} alt=""></Picture>
          <Button class="closePopButton" onClick={this.props.closePopup}>X</Button>
        </PupInner>
      </Pup>
    );
  }
}
export default Popup;
