import React from 'react';
import './index.scss';
import instagram from '../../assets/icons/instagram.svg';

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="footer-content">
          <a href="tel:469-232-7446">
            <p className="phone">+1 (469) 232-7446</p>
          </a>
          <a className="email" href="mailto:lumengraphicsdallas@gmail.com">
            <p>lumengraphicsdallas@gmail.com</p>
          </a>
          <p className="address">2572 Walnut Hill Lane 100, Dallas, TX, 75229</p>
          <a className="insta" href="https://instagram.com/lumengraphicsdallas" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="instagram logo" />
          </a>
        </div>
        <p className="SageCo">Built by <a href="https://thesage.co/" target="_blank" rel="noopener noreferrer">SageCo</a></p>
      </footer>
    </div>
  );
};

