import React from 'react';
import './index.scss';
import LangSelector from '../lang-selector';
import logo from '../../assets/logo/logo.png'

function Navbar() {
  return (
    <div className="navbar">
      <nav className="navbar container">
        <div className="left">
          <img src={logo} alt="lumen graphics logo"/>
        </div>
        <div className="right">
          <div className="contact-language">
            <a href="contact">
              <p>Contact</p>
            </a>
            {LangSelector({
              options: ["ENG", "ESP"]
            })}
          </div>
          <p id="tagline">Business printing and marketing solutions</p>
        </div>
      </nav>
    </div>
  );

};

export default Navbar;

