import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom'
import Item from './item.jsx'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled'

const Pop = styled.div`
  position: fixed;
	z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  font-family: 'Avenir Next', sans-serif;
  text-transform: none;
  overflow-y: scroll;
`;

const PopInner = styled.div`
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
  position: relative;
  text-transform: capitalize;
`;

const Description = styled.div`
  position: absolute;
  float: right;
  padding-top: 5%;
  top: 10%;
  left: 60%;
  font-size: 1.25em;
  color: black;
  font-family: 'Source Sans Pro', sans-serif;
  text-align: left;
`;

const Picture = styled.img`
  float: left;
  position: absolute;
  width: 30%;
  left: 2%;
  top: 25%;
`;

const LinkTo = styled.a`
  color: white;
`;

const ButtonText = styled.a`
  color: white;
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

const DesktopButton = styled.div`
    display: inline-block;
    cursor: pointer;
    background-color: lightcoral;
    width: 100px;
    padding: 1%;
    text-align: center;
    color: white;
    font-weight: bold;
    border-radius: 25px 25px 25px 25px;
    font-size: 15px;
`;

const Space = styled.div`
  padding-top: 4%;
`;

class Popup extends Component {

  render() {
    const desktopPop = (
      <Pop>
        <PopInner>
          <Title>{this.props.text}, ${this.props.price}</Title>
          <Description>{this.props.description}
            <Space><DesktopButton><LinkTo href={this.props.link} target="_blank">Buy Here</LinkTo></DesktopButton></Space>
            <Space><DesktopButton><Link to={{pathname: "/survey", state: {productName: this.props.text}}}><ButtonText>Take a Survey</ButtonText></Link></DesktopButton></Space>
          </Description>
          <Picture src={this.props.image} alt=""></Picture>
          <Button class="closePopButton" onClick={this.props.closePopup}>X</Button>
        </PopInner>
      </Pop>
    );

    const mobilePop = (
      <Pop>
        <PopInner>
          <Title>{this.props.text}, ${this.props.price}</Title>
          <Description>{this.props.description}
            <Space><DesktopButton><LinkTo href={this.props.link} target="_blank">Buy Here</LinkTo></DesktopButton></Space>
            <Space><DesktopButton><Link to={{pathname: "/survey", state: {productName: this.props.text}}}><ButtonText>Take a Survey</ButtonText></Link></DesktopButton></Space>
          </Description>
          <Picture src={this.props.image} alt=""></Picture>
          <Button class="closePopButton" onClick={this.props.closePopup}>X</Button>
        </PopInner>
      </Pop>
    );

    return(
      <Media query={{ minWidth: 500 }}>
        {matches => (matches ? desktopPop : mobilePop)}
      </Media>
    );
  }
}
export default Popup;
