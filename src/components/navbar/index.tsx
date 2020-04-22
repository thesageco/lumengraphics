import React, { useState } from 'react';
import './index.scss';
import Dropdown from '../dropdown';

function Navbar() {
  const [active, setActive] = useState('');
  
  return (
    <div className="navbar">
      <nav className="navbar container">
        <div className="left">
          <span>Lumen Graphics</span>
        </div>
        <div className="right">
          <span>Business printing and marketing solutions</span>
          {Dropdown({
            options: ["EN", "SP"]
          })}
        </div>
      </nav>
    </div>
  );

};

export default Navbar;

