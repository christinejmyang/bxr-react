import React, {Component} from 'react'
import './../App.css'
import styled from '@emotion/styled'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import product from './../img/product.svg'
import data from './../img/data.svg'
import money from './../img/money.svg'
import arrow from './../img/down-arrow2.svg'


const DesktopHIW = styled.div`
  font-family: 'Avenir Next', sans-serif;
`;
const DesktopPicture = styled.img`
  padding-top: 50px;
  width: 100px;
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
`;
const Arrow = styled.div`
	text-align: center;
	align-content: center;
	padding-left: 50%;
	padding-top: 2.5%;
	padding-bottom: 2.5%;
	width: 100px;
`;

class HowItWorks extends Component{

	render(){
		const desktop = (
			<DesktopHIW>
				<h1>How it Works</h1>
					<Collection>
						<Left>
							<DesktopPicture src={product} />
						</Left>
						<Right>
							AirBnb customers will have the opportunity to test and sample popular
							products from their favorite brands. There's only one cavaet: you'll have to take a brief survey
							documenting your experience with the product if you want to use it.
						</Right>
						<br />
						<br />
						<Arrow>
							<img src={arrow} />
						</Arrow>
						<Left>
							<DesktopPicture src={data} />
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
							<DesktopPicture src={money} />
						</Left>
						<Right>
							Customers are rewarded monetarily or on the BXR points system, which can lead to
							future BXR rewards!
						</Right>
				</Collection>
			</DesktopHIW>
		);

		const mobile = (
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
		);

		return (
			<Section>
      <Media query={{ minWidth: 900 }}>
        {matches => (matches ? desktop : mobile)}
      </Media>
			</Section>
    );
	}
}

export default HowItWorks;
