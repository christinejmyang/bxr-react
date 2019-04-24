import React, {Component} from 'react'
import './../App.css'
import styled from '@emotion/styled'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import product from './../img/product.svg'
import data from './../img/data.svg'
import money from './../img/money.svg'


const DesktopHIW = styled.div`

`;

const MobileHIW = styled.div`

`;

class HowItWorks extends Component{

	render(){
		const desktop = (
			<DesktopHIW>
				<div class="two">
					<article>
						 <h1>How it Works</h1>
					</article>
					<article class="descript-text">
						<img src={product} alt="" class="icons" />
						<p>AirBnb customers will have the opportunity to test and sample popular
						products from their favorite brands. There's only one cavaet: you'll have to take a brief survey
						documenting your experience with the product if you want to use it.</p>
					</article>
					<article class="descript-text">
						<img src={data} alt="" class="icons" />
						<p>BXR will share the resulting data with the brands that make these popular products.</p>
					</article>
					<article class="descript-text">
						<img src={money} alt="" class="icons" />
						<p>Customers are rewarded monetarily or on the BXR points system, which can lead to
						future BXR rewards!</p>
					</article>
				</div>
			</DesktopHIW>
		);

		const mobile = (
			<MobileHIW>
				<div class="two">
					<article>
						 <h1>How it Works</h1>
					</article>
					<article class="descript-text">
						<img src={product} alt="" class="icons" />
						<p>AirBnb customers will have the opportunity to test and sample popular
						products from their favorite brands. There's only one cavaet: you'll have to take a brief survey
						documenting your experience with the product if you want to use it.</p>
					</article>
					<article class="descript-text">
						<img src={data} alt="" class="icons" />
						<p>BXR will share the resulting data with the brands that make these popular products.</p>
					</article>
					<article class="descript-text">
						<img src={money} alt="" class="icons" />
						<p>Customers are rewarded monetarily or on the BXR points system, which can lead to
						future BXR rewards!</p>
					</article>
				</div>
			</MobileHIW>
		);

		return (
      <Media query={{ minWidth: 500 }}>
        {matches => (matches ? desktop : mobile)}
      </Media>
    );
	}
}

export default HowItWorks;
