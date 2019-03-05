import React from 'react';
import './../App.css';

class About extends React.Component{
	render(){
		return(
			  <div>
          <section class="aboutone">
            <article>
              <p class="about-header">Mission and Meaning</p>
              <p class="prof-text">BXR (<b>B</b>rand E<b>X</b>perience <b>R</b>ating) is
              a platform that focuses on brand-to-customer relationships. By utilizing a unique model that focuses exclusively on the
              product and customer, BXR delivers to both parties involved: brands get quality data at a cheap price, and
              consumers are rewarded for testing the products they love. What could be better?</p>
              <p class="prof-text">At BXR, we strive to create an inclusive, accomodating experience for all of our users and customers.
              If we ever fall short of your expectations, please let us know! We value your opinion and feedback.</p>
            </article>
            <article class="profile">
              <p class="about-header">Meet the Team</p>
              <img src="img/profile1.png" alt="" class="leftpic" />
              <h1 class="prof-header">Sean Yoon, Co-founder and CEO</h1>
              <p class="prof-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.</p>
            </article>
            <article class="profile">
              <img src="img/profile1.png" alt="" class="rightpic" />
              <h1 class="prof-header">Nishant Kumar, Co-founder and CTO</h1>
              <p class="prof-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.</p>
            </article>
            <article class="profile">
              <img src="img/daniel.jpg" alt="" class="leftpic" />
              <h1 class="prof-header">Daniel Berlin, Software Development Team</h1>
              <p class="prof-text">Daniel is originally from Cleveland, Ohio and now studies Computer Science and Finance at Duke University.
                He enjoys golf, fitness and reading. Hes also a huge Billy Joel fan!</p>
            </article>
            <article class="profile">
              <img src="img/will1.jpeg" alt="" class="rightpic" />
              <h1 class="prof-header">Will Sheehan, Software Development Team</h1>
              <p class="prof-text">Will is originally from Hawaii and currently lives in Austin, Texas. Will studies Computer Science and Decision
                Sciences at Duke University. He enjoys spending time outdoors and reading fantasy novels. He has two younger siblings, and a dog named Koda.</p>
            </article>
            <article class="profile">
              <img src="img/christine.jpg" alt="" class="leftpic" />
              <h1 class="prof-header">Christine Hwang, Software Development Team</h1>
              <p class="prof-text">Christine is originally from Seoul, South Korea, and now lives in central Florida. Christine studies Computer Science, VMS, and Psychology at Duke University. She enjoys dancing and trying new food. She can fit her arm in a vending machine!</p>
            </article>
          </section>
			  </div>
		);
	}
}
export default About;
