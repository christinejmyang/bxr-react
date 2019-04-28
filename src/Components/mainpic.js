import React from 'react';
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import './../App.css'
import apartment from './../img/apartment.jpg'

const Main = styled.div`
	position: relative;
	text-align: center;
`;
const DesktopPicture = styled.img`
  width: 100%;
`;
const Headline = styled.h1`
	position: absolute;
	font-family: 'Avenir Next', sans-serif;
	color: white;
	top: 45%;
	left: 15%;
	font-weight: bold;
	text-align: center;
	font-size: 3vw;
`;

class MainPic extends React.Component{
	render(){
		return(
			  <Main>
			    <DesktopPicture src={apartment}/>
					<Headline><i>Authentic market insights better, faster, cheaper.</i></Headline>
			  </Main>
		);
	}
}
export default MainPic;
