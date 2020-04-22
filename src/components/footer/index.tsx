import React from 'react';
import './index.scss';
import instagram from '../../assets/icons/instagram.svg';

export default function Footer() {
  return (
    <div className="footer">
      <footer className="footer-content">
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="instagram logo" />
        </a>
      </footer>
    </div>
  );
};

