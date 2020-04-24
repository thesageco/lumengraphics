import React, { useState, useContext } from 'react';
import './index.scss';
import { LanguageSetStore } from '../../App';

interface LangSelectorProp {
  options: String[];
}

export default function LangSelector(props: LangSelectorProp) {
  const [state, setState] = useState(props);
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useContext(LanguageSetStore);
  
  function handleClick(i: number, lang: String) {
    // @ts-ignore
    dispatch({action: 'update', lang: lang});
    setActiveIndex(i);
  }
  return (
    <div className="lang-selector">
    {state.options.map<React.ReactNode>((lang, i) => {
      return <span className={`lang-item ${activeIndex === i?"selected":""}`} onClick={() => handleClick(i, lang)} key={i}>{lang}</span>
    }).reduce((prev, curr) => [prev, '|', curr])}
    </div>
  );

};
