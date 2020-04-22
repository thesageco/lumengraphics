import React, { useState, useContext } from 'react';
import './index.scss';
import { LanguageSetStore } from '../../App'
import down from '../../assets/icons/down-arrow.svg'

interface DropdownProp {
  options: String[];
}

export default function Dropdown(props: DropdownProp) {
  const [state, setState] = useState(props);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useContext(LanguageSetStore);
  
  function toggleOpen() {
    setOpen(!open);
  }
  
  function handleClick(i: number, lang: String) {
    // @ts-ignore
    dispatch({action: 'update', lang: lang});
    setActiveIndex(i);
    toggleOpen();
  }
  
  return (
    <div className="dd-wrapper">
      <div className="dd-header">
        <div className="dd-header-title" onClick={toggleOpen}>
          {state.options[activeIndex]}
          <img alt="down arrow" src={down} className={`${open?"up":"down"}`}/>
        </div>
        
      </div>
      <ul className={`dd-list ${open?"show":"hide"}`}>
        {state.options.map((lang, i) => {
          return <li className={`dd-list-item ${activeIndex === i?"selected":""}`} onClick={() => handleClick(i, lang)} key={i}>{lang}</li>
        })}
      </ul>
    </div>
  );

};
