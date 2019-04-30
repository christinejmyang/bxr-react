import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom'
import Item from './item.js'
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
    height: 400px;
  background: white;
	text-align: center;
`;

const Description = styled.div`
    margin-left: 40.5%;
    margin-top: -6%;
    margin-bottom: -2%;
    padding: 6%;
    font-weight: 300;
    font-size: 1.1em;
    color: black;
    font-family: 'Avenir Next', sans-serif;
    text-align: left;
`;

const Picture = styled.img`
    float: left;
  position: absolute;
  width: 30%;
  left: 5%;
  top: 15%;
`;


const ItemName = styled.h2`
    color: black;
    margin-top: 6%;
    margin-left: 5%;
    text-transform: capitalize;
`;

const ItemPrice = styled.h3`
    color: black;
    font-weight: 400;
    margin-top: -2%;
    margin-left: 3%;
    text-transform: capitalize;
`;

const LinkTo = styled.a`
  color: white;
`;

const ButtonText = styled.a`
    color: white;
    font-weight: 700;
`;

const Button = styled.a`
    cursor: pointer;
    position: absolute;
    font-weight: bold;
    font-size: 1.5em;
    margin-top: 11%;
    margin-left: 22%;
    z-index: 2;
`;

const DesktopButton = styled.div`
    display: inline-block;
    cursor: pointer;
    background-color: lightcoral;
    font-family: 'Avenir Next', sans-serif;
    margin-left: 22%;
    width: 20%;
    padding: 2%;
    margin-right: -18%;
    text-align: center;
    color: white;
    font-weight: 700;
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
        <Button class="" onClick={this.props.closePopup}>X</Button>
        <PopInner>
            <Picture src={this.props.image} alt=""></Picture>
                <ItemName>{this.props.text}</ItemName>
                <ItemPrice>${this.props.price}</ItemPrice>
                <Description>{this.props.description}</Description>
                <DesktopButton><LinkTo href={this.props.link} target="_blank">Buy Here</LinkTo></DesktopButton>
                <Link to={{pathname: "/survey", state: {productName: this.props.text}}}><DesktopButton>Take a Survey</DesktopButton></Link><br/><br/>
        </PopInner>
      </Pop>
    );

    const mobilePop = (
      <Pop>
        <PopInner>
            <Picture src={this.props.image} alt=""></Picture>
                <ItemName>{this.props.text}</ItemName>
                <ItemPrice>${this.props.price}</ItemPrice>
                <Description>{this.props.description}</Description>
                <DesktopButton><LinkTo href={this.props.link} target="_blank">Buy Here</LinkTo></DesktopButton>
                <Link to={{pathname: "/survey", state: {productName: this.props.text}}}><DesktopButton>Take a Survey</DesktopButton></Link><br/><br/>
        
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
