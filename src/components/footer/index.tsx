import React from 'react';
import './index.scss';
import instagram from '../../assets/icons/instagram.svg';

export default function Footer() {
  return (
    <div className="footer">
      <footer className="footer-content">
        <p className="phone">+1 (940) 293-7891</p>
        <a className="email" href="mailto:lumengraphicsdallas@gmail.com">
          <p>lumengraphicsdallas@gmail.com</p>
        </a>
        <p className="address">2572 Walnut Hill Lane 100, Dallas, TX, 75229</p>
        <a className="insta" href="https://instagram.com/lumengraphicsdallas" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="instagram logo" />
        </a>
      </footer>
    </div>
  );
};

