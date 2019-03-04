import React from 'react';
import './../App.css';
import product from './../img/product.svg';
import data from './../img/data.svg';
import money from './../img/money.svg';

class HowItWorks extends React.Component{

	render(){
		var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec tincidunt ipsum augue. In faucibus vehicula magna pulvinar aliquam. Cras aliquam feugiat lorem non auctor. Quisque sed lorem egestas mauris venenatis commodo eu id nibh. Ut porta libero sed semper faucibus ";
		return(
			<div>
				<section class="two" id="hiw">
					<article class="">
						 <br /><h1>How it Works</h1>
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
						<br/ >
						<br/ >
					</article>
				</section>
			</div>
		);
	}
}
export default HowItWorks;
