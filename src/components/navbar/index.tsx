import React, { useContext } from 'react';
import './index.scss';
import LangSelector from '../lang-selector';
import { LanguageStore } from '../../App'
import logo from '../../assets/logo/logo.png'

function Navbar() {
  
  const lang = useContext(LanguageStore);
  return (
    <div className="navbar">
      <nav className="navbar container">
        <div className="left">
          <img src={logo} alt="lumen graphics logo"/>
        </div>
        <div className="right">
          <div className="contact-language">
            <a href="contact">
              <p>{lang === "ENG" ? "Contact" : "Contacto"}</p>
            </a>
            {LangSelector({
              options: ["ENG", "ESP"]
            })}
          </div>
          <p id="tagline">{lang === "ENG" ? "Business printing and marketing solutions" : "Impresión comercial y soluciones de marketing"}</p>
        </div>
      </nav>
    </div>
  );

};

export default Navbar;

