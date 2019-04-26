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
    font-family: 'Avenir Next', sans-serif;
`;

const DesktopHomePic = styled.section`
    width: 100%;
    height: 500px;
    margin-top: -9%;
	background-image: url(${apartment}), url(${staircase}), url(${facade});;
    background-position: left, right top, right bottom;
	background-repeat: no-repeat;
	font-family: 'Avenir Next', sans-serif;
    border-bottom: 2px solid lightcoral;
`;

const DesktopHeadline = styled.h1`
    text-align: center;
    font-size: 1.5em;
    margin-left: -10%;
    font-weight: 600;
    font-style: italic;
	color: white;
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
                <DesktopHomePic>
                    <DesktopHeadline><br/><br/><br/><br/><br/>Get authentic market insights better, faster, cheaper.</DesktopHeadline>
                </DesktopHomePic>
                <DesktopHow>
                    <br/><br/><h1>How it Works</h1><br/>
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
                    </DesktopPoints>
                </DesktopHow>
            </DesktopHome>
        );
        const HomepageMobile = (  
            <DesktopHome>
                <DesktopHomePic>
                    Get authentic market insights better, faster, cheaper.
                </DesktopHomePic>
                <DesktopHow>
                    <h1>How</h1>
                        <img src={product} alt="" class="icons" />
                        <p>AirBnb customers will have the opportunity to test and sample popular products from their favorite brands. There's only one caveat: you'll have to take a brief survey documenting your experience with the product if you want to use it.</p>
                        <img src={data} alt="" class="icons" />
                        <p>BXR will share the resulting data with the brands that make these popular products.</p>
                        <img src={money} alt="" class="icons" />
                        <p>Customers are rewarded monetarily or on the BXR points system, which can lead to
                        future BXR rewards!</p>
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
