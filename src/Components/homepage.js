import React, {Component} from 'react'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled'
import product from './../img/product.svg';
import data from './../img/data.svg';
import money from './../img/money.svg';
import apartment from './../img/apartment.jpg';
import staircase from './../img/staircase.jpg';
import facade from './../img/facade.jpg';

const DesktopHome = styled.div`
	position: relative;
	text-align: center;
    font-family: 'Avenir Next', sans-serif;
`;

const DesktopPicture = styled.img`
  width: 100%;
`;

const Headline = styled.h1`
	position: absolute;
	font-family: 'Avenir Next', sans-serif;
	color: white;
	left: 15%;
	font-weight: bold;
	text-align: center;
	font-size: 3vw;
`;

const DesktopHow = styled.div`
    width: 60%;
    margin: auto;
`;

const DesktopPoints = styled.div`
    height: 100px;
`;


const DesktopIcon = styled.img`
    float: left;
    margin-right: 3%;
    height: 60px;
`;

class Homepage extends Component {

	render() {
        const HomepageDesktop = (
            <DesktopHome>
                <DesktopPicture src={apartment}/>
                <Headline><i>Authentic market insights better, faster, cheaper.</i></Headline>
                <DesktopHow>
                    <h1>How it Works</h1><br/>
                    <DesktopPoints>
                        <DesktopIcon src={product}/>
                        AirBnb customers will have the opportunity to test and sample popular products from their favorite brands. There's only one caveat: you'll have to take a brief survey documenting your experience with the product if you want to use it and/or purchase it online with an applied exclusive discount.
                    </DesktopPoints>
                    <DesktopPoints>
                        <DesktopIcon src={data}/>
                        <br/>BXR will share the resulting data with the brands that make these popular products.
                    </DesktopPoints>
                    <DesktopPoints>
                        <DesktopIcon src={money}/>
                        <br/>Customers are rewarded monetarily or on the BXR points system, which can lead to future BXR rewards!
                    </DesktopPoints><br/><br/>
                </DesktopHow>
            </DesktopHome>
        );
        const HomepageMobile = (  
            <DesktopHome>
                <DesktopPicture src={staircase}/>
                <Headline><i>Authentic market insights better, faster, cheaper.</i></Headline>
                <DesktopHow>
                    <h1>How it Works</h1><br/>
                    <DesktopPoints>
                        <DesktopIcon src={product}/>
                        AirBnb customers will have the opportunity to test and sample popular products from their favorite brands. There's only one caveat: you'll have to take a brief survey documenting your experience with the product if you want to use it and/or purchase it online with an applied exclusive discount.
                    </DesktopPoints>
                    <DesktopPoints>
                        <DesktopIcon src={data}/>
                        <br/>BXR will share the resulting data with the brands that make these popular products.
                    </DesktopPoints>
                    <DesktopPoints>
                        <DesktopIcon src={money}/>
                        <br/>Customers are rewarded monetarily or on the BXR points system, which can lead to future BXR rewards!
                    </DesktopPoints><br/><br/>
                </DesktopHow>
            </DesktopHome>
        );
		return(
            <Media query={{ minWidth: 500 }}>
                {matches => (matches ? HomepageDesktop : HomepageMobile)}
            </Media>
		);
	}
}
export default Homepage;
