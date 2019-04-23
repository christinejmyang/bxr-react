import React, {Component} from 'react'
import Item from './item'
import Media from 'react-media'
import { Section, bodyTextStyle } from './Section.js'
import styled from '@emotion/styled';
import './../App.css';

const DesktopFooter = styled.footer`
	background-color: rgb(48, 48, 48, 48);
	width: 100%;
	left: 0;
	border-top: 2px solid lightcoral;
	font-family: 'Avenir Next', sans-serif;
	color: white;
`;
const DesktopFooterBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0.5%;
	margin-bottom: 1%;
`;
const DesktopFooterBoxElement = styled.div`
	margin: 3%;
`;
const DesktopFooterTitle = styled.h1`
	font-weight: bold;
`;
const Link = styled.a`
	text-decoration: none;
	color: gray;
	transition: color 0.3s;
	&:hover {
		color: white;
	}
	&:visited {
		color: white;
	}
`;
const DesktopFooterList = styled.ul`
	padding: 0;
	list-style-type: none;
`;
const DesktopFooterListItem = styled.li`
	padding: 3px;
`;

class Footer extends Component {
	render(){
		const footerDesktop = (
			<DesktopFooter>
				<DesktopFooterBox>
				  <DesktopFooterBoxElement>
				    <DesktopFooterTitle>BXR</DesktopFooterTitle>
				    <DesktopFooterList>
				      <DesktopFooterListItem><Link href="/">Home</Link></DesktopFooterListItem>
				      <DesktopFooterListItem><Link href="/about">About</Link></DesktopFooterListItem>
				    </DesktopFooterList>
				  </DesktopFooterBoxElement>
				  <DesktopFooterBoxElement>
				    <DesktopFooterTitle>Community</DesktopFooterTitle>
				    <DesktopFooterList>
				      <DesktopFooterListItem><Link href="">Medium</Link></DesktopFooterListItem>
				      <DesktopFooterListItem><Link href="">Instagram</Link></DesktopFooterListItem>
				      <DesktopFooterListItem><Link href="">FaceBook</Link></DesktopFooterListItem>
				    </DesktopFooterList>
				  </DesktopFooterBoxElement>
					<DesktopFooterBoxElement>
				    <DesktopFooterTitle>Location</DesktopFooterTitle>
				    <DesktopFooterList>
				      <DesktopFooterListItem><Link href="">315 Towerview Drive</Link></DesktopFooterListItem>
				      <DesktopFooterListItem><Link href="">Crowell DD210</Link></DesktopFooterListItem>
				      <DesktopFooterListItem><Link href="">Durham, NC 27708</Link></DesktopFooterListItem>
				    </DesktopFooterList>
				  </DesktopFooterBoxElement>
					<DesktopFooterBoxElement>
				    <DesktopFooterTitle>Contact</DesktopFooterTitle>
				    <DesktopFooterList>
				      <DesktopFooterListItem><Link href="">Phone: (440) 476-7784</Link></DesktopFooterListItem>
				      <DesktopFooterListItem><Link href="">Email: inquiries@bxr.com</Link></DesktopFooterListItem>
				    </DesktopFooterList>
					</DesktopFooterBoxElement>
				</DesktopFooterBox>
			</DesktopFooter>
		 );
		 return (
       <Section title="">
         <Media query={{ minWidth: 500 }}>
           {matches => (matches ? footerDesktop : footerDesktop)}
         </Media>
       </Section>
     );
	 }
};

export default Footer;
