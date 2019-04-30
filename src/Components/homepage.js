import React, {Component} from 'react'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled'
import apartment from './../img/apartment.jpg';
import product from './../img/product.svg'
import data from './../img/data.svg'
import money from './../img/money.svg'
import arrow from './../img/down-arrow2.svg'

const DesktopHome = styled.div`
	position: relative;
	text-align: center;
    font-family: 'Avenir Next', sans-serif;
`;

const DesktopPicture = styled.img`
  width: 100%;
`;

const DesktopIcon = styled.img`
  padding-top: 50px;
  width: 100px;
`;

const Headline = styled.h1`
	position: absolute;
	font-family: 'Avenir Next', sans-serif;
	color: white;
	left: 15%;
    top: 14%;
	font-weight: bold;
	text-align: center;
	font-size: 3vw;
`;

const HIW = styled.h1`
	font-family: 'Avenir Next', sans-serif;
	font-weight: bold;
	text-align: left;
`;

const DesktopHIW = styled.div`
  font-family: 'Avenir Next', sans-serif;
    width: 70%;
    margin: auto;
`;

const MobileHIW = styled.div`
  font-family: 'Avenir Next', sans-serif;
  align-content: center;
  text-align: center;
`;
const Collection = styled.div`
	margin-bottom: 150px;
`;
const Left = styled.div`
  float: left;
`;
const Right = styled.div`
  margin-left: 15%;
  padding-top: 50px;
    text-align: left;
`;
const Arrow = styled.div`
	text-align: center;
	align-content: center;
	padding-left: 50%;
	padding-top: 1%;
	padding-bottom: 1%;
	width: 80px;
`;

class Homepage extends Component {

	render() {
        const HomepageDesktop = (
            <DesktopHome>
                <DesktopPicture src={apartment}/>
                <Headline><i>Authentic market insights better, faster, cheaper.</i></Headline>
                <DesktopHIW>
                    <HIW><br/>How it Works</HIW>
                        <Collection>
                            <Left>
                                <DesktopIcon src={product} />
                            </Left>
                            <Right>
                                AirBnb customers will have the opportunity to test and sample popular
                                products from their favorite brands. There's only one caveat: you'll have to take a brief survey
                                documenting your experience with the product if you want to use it.
                            </Right>
                            <br />
                            <br />
                            <Arrow>
                                <img src={arrow} />
                            </Arrow>
                            <Left>
                                <DesktopIcon src={data} />
                            </Left>
                            <Right>
                                BXR will share the resulting data with the brands that make these popular products.
                            </Right>
                            <br />
                            <br />
                            <br />
                            <br />
                            <Arrow>
                                <img src={arrow} />
                            </Arrow>
                            <Left>
                                <DesktopIcon src={money} />
                            </Left>
                            <Right>
                                Customers are rewarded monetarily or on the BXR points system, which can lead to
                                future BXR rewards!
                            </Right>
                    </Collection>
                </DesktopHIW>
            </DesktopHome>
        );
        const HomepageMobile = (  
            <DesktopHome>
                <DesktopPicture src={apartment}/>
                <Headline><i>Authentic market insights better, faster, cheaper.</i></Headline>
                <MobileHIW>
                    <h1>How it Works</h1>
                        <Collection>
                            <div>
                                <DesktopPicture src={product} />
                            </div>
                            <div>
                                AirBnb customers will have the opportunity to test and sample popular
                                products from their favorite brands. There's only one cavaet: you'll have to take a brief survey
                                documenting your experience with the product if you want to use it.
                            </div>
                            <br />
                            <br />
                            <div>
                                <DesktopPicture src={data} />
                            </div>
                            <div>
                                BXR will share the resulting data with the brands that make these popular products.
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div>
                                <DesktopPicture src={money} />
                            </div>
                            <div>
                                Customers are rewarded monetarily or on the BXR points system, which can lead to
                                future BXR rewards!
                            </div>
                    </Collection>
                </MobileHIW>
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
