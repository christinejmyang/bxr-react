import React from 'react';
import styled from '@emotion/styled'
import { Section, bodyTextStyle } from './Section.js'
import Media from 'react-media'
import profilepic from './../img/profile1.png';
import daniel from './../img/daniel.jpg';
import will from './../img/will.jpg';
import christine from './../img/christine.jpg';
import nishant from './../img/nishant.jpg';
import sean from './../img/sean.jpg';

const DesktopAbout = styled.div`
    font-family: 'Avenir Next', sans-serif;
    width: 80%;
    padding: 10%;
`;

const DesktopFounderTeam = styled.div`
    display: grid;
    grid-template-columns: auto auto;
`;
const DesktopFounder = styled.div`
    padding: 5%;
`;

const DesktopStudentTeam = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
`;
const DesktopStudent = styled.div`
    padding: 5%;
`;

const DesktopPic = styled.img`
    border-radius: 50%;
    height: 100px;
    margin-right: 5%;
    float: left;
`;
const DesktopText = styled.p`
    text-align: left;
    font-size: 1em;
    width: 100%;
    margin-top: 5%;
`;

const MobileAbout = styled.div`
  font-family: 'Avenir Next', sans-serif;
  background-color: white;
  padding: 5%;
  font-size: 0.8em;
`;

class About extends React.Component{
	render(){
		const desktop = (
			<DesktopAbout>
                <h1>Mission and Meaning</h1>
                BXR (<b>B</b>rand E<b>X</b>perience <b>R</b>oom) is
                a platform that focuses on brand-to-customer relationships. By utilizing a unique model that focuses exclusively on the product and customer, BXR delivers to both parties involved: brands get quality data at a cheap price, and consumers are rewarded for testing the products they love.<br/><br/>
                At BXR, we strive to create an inclusive, accomodating experience for all of our users and customers. If we ever fall short of your expectations, please let us know! We value your opinion and feedback.<br/><br/><br/>
                    <hr style={{border: '1px dashed coral'}}/><br/>

                <h2>Meet the Team</h2>
                <DesktopFounderTeam>
                    <DesktopFounder>
                        <DesktopPic src={sean} alt=""/>
                        <br/><h3>Sean Yoon, Co-founder & CEO</h3>
                        <DesktopText><br/><br/>hiiiLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</DesktopText>
                    </DesktopFounder>

                    <DesktopFounder>
                        <DesktopPic src={nishant} alt=""/>
                        <br/><h3>Nishant Kumar, Co-founder & CTO</h3>
                        <DesktopText><br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquipex ea commodo consequat.</DesktopText><br/>
                    </DesktopFounder>
                </DesktopFounderTeam>

                <DesktopStudentTeam>
                    <DesktopStudent>
                        <DesktopPic src={daniel} alt="" class="leftpic" />
                        <h3>Daniel Berlin,<br/>Software Development</h3>
                        <DesktopText><br/><br/>Daniel is originally from Cleveland, Ohio and now studies Computer Science and Finance at Duke University. He enjoys golf, fitness and reading. He's also a huge Billy Joel fan!</DesktopText><br/>
                    </DesktopStudent>
                    <DesktopStudent>
                        <DesktopPic src={will} alt="" class="rightpic" />
                        <h3>Will Sheehan,<br/>Software Development</h3>
                        <DesktopText><br/><br/>Will is originally from Hawaii and currently lives in Austin, Texas. Will studies Computer Science and Decision Sciences at Duke University. He enjoys spending time outdoors and reading fantasy novels. He has two younger siblings, and a dog named Koda.</DesktopText><br/>
                    </DesktopStudent>
                    <DesktopStudent>
                        <DesktopPic src={christine} alt="" class="leftpic" />
                        <h3>Christine Hwang,<br/>Software Development</h3>
                        <DesktopText><br/><br/>Christine is originally from Seoul, South Korea, and now lives in central Florida. Christine studies Computer Science and Visual Media Studies at Duke University. She enjoys dancing and trying new food. She can fit her arm in a vending machine!</DesktopText>
                    </DesktopStudent>
                </DesktopStudentTeam>
			</DesktopAbout>
		);
		const mobile = (
			<MobileAbout>
				<section class="aboutone">
					<article>
						<p class="about-header">Mission and Meaning</p>
						<p class="prof-text">BXR (<span id="bold">B</span>rand E<span id="bold">X</span>perience <span id="bold">R</span>oom) is
						a platform that focuses on brand-to-customer relationships. By utilizing a unique model that focuses exclusively on the
						product and customer, BXR delivers to both parties involved: brands get quality data at a cheap price, and
						consumers are rewarded for testing the products they love.</p>
						<p class="prof-text">At BXR, we strive to create an inclusive, accomodating experience for all of our users and customers.
						If we ever fall short of your expectations, please let us know! We value your opinion and feedback.</p>
					</article>
					<article class="profile">
						<p class="about-header">Meet the Team</p>
						<img src={profilepic} alt="" class="leftpic" />
						<h1 class="prof-header">Sean Yoon, Co-founder and CEO</h1>
						<p class="prof-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.</p>
					</article>
					<article class="profile">
						<img src={profilepic} alt="" class="rightpic" />
						<h1 class="prof-header">Nishant Kumar, Co-founder and CTO</h1>
						<p class="prof-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat.</p>
					</article>
					<article class="profile">
						<img src={daniel} alt="" class="leftpic" />
						<h1 class="prof-header">Daniel Berlin, Software Development Team</h1>
						<p class="prof-text">Daniel is originally from Cleveland, Ohio and now studies Computer Science and Finance at Duke University.
							He enjoys golf, fitness and reading. Hes also a huge Billy Joel fan!</p>
					</article>
					<article class="profile">
						<img src={will} alt="" class="rightpic" />
						<h1 class="prof-header">Will Sheehan, Software Development Team</h1>
						<p class="prof-text">Will is originally from Hawaii and currently lives in Austin, Texas. Will studies Computer Science and Decision
							Sciences at Duke University. He enjoys spending time outdoors and reading fantasy novels. He has two younger siblings, and a dog named Koda.</p>
					</article>
					<article class="profile">
						<img src={christine} alt="" class="leftpic" />
						<h1 class="prof-header">Christine Hwang, Software Development Team</h1>
						<p class="prof-text">Christine is originally from Seoul, South Korea, and now lives in central Florida. Christine studies Computer Science, VMS, and Psychology at Duke University. She enjoys dancing and trying new food. She can fit her arm in a vending machine!</p>
					</article>
				</section>
			</MobileAbout>
		);
		return(
      <Media query={{ minWidth: 800 }}>
        {matches => (matches ? desktop : mobile)}
      </Media>
    );
	}
}
export default About;
