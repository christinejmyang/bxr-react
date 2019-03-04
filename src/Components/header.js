import React from 'react';
import { Link } from 'react-router';
import './../App.css';

class Header extends React.Component{
	render(){
		return(
			  <div>
          <header>
            <a class="header-index" href="index.html">bxr</a>
            <nav>
              <ul>
                <li> <a class="dropbtn">
                <div class="dropdown"><a>Benefits</a><div class="dropdown-content">
                    <a href="">For Brands</a>
                    <a href="">For Owners</a>
                    <a href="">For Renters</a>
                  </div>
                </div></a></li>
                <li> <a href="./../public/about.html"> About </a> </li>
                <li> <a href="#hiw"> How it Works </a> </li>
              </ul>
            </nav>
          </header>
			  </div>
		);
	}
}
export default Header;
