import React, {Component} from 'react'
import Item from './item'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import firebase, {auth, provider} from './../firebase.js';

class Popup extends Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text} ${this.props.price}</h1>
          <p>{this.props.description}</p>
        <img src="https://picsum.photos/200" alt=""/>
        <a href={this.props.link} target="_blank">Buy Here</a>
        <button className='closePopButton' onClick={this.props.closePopup}>close</button>
        </div>
      </div>
    );
  }
}
export default Popup;
