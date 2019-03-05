import React from 'react';
import './../App.css';

class Footer extends React.Component{
	render(){
		return(
		  <div>
        <footer>
          <div class="footer-box">
            <div class="footer-box-elem">
              <h1>BXR</h1>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </div>
            <div class="footer-box-elem">
              <h1>Community</h1>
              <ul>
                <li><a href="">Medium</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">FaceBook</a></li>
              </ul>
            </div>
            <div class="footer-box-elem">
              <h1>Location</h1>
              <ul>
                <li><a href="">315 Towerview Drive</a></li>
                <li><a href="">Crowell DD210</a></li>
                <li><a href="">Durham, NC 27708</a></li>
              </ul>
            </div>
            <div class="footer-box-elem">
              <h1>Contact</h1>
              <ul>
                <li><a href="">Phone: (440) 476-7784</a></li>
                <li><a href="">Email: inquiries@bxr.com</a></li>
              </ul>
            </div>
          </div>
          <p id="copyright">BXR, © 2019. All Rights Reserved.</p>
          </footer>
       </div>
		);
	}
}
export default Footer;
