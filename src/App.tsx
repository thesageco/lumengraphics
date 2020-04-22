import React, { useReducer, useEffect, useState } from 'react';
import './App.scss';

import Navbar from './components/navbar';
import Footer from './components/footer';

const LanguageSetStore = React.createContext({});
const LanguageStore = React.createContext({});

function languageReducer(
  state: {lang: string}, 
  action: {type: string, lang: string}
) {
  switch (action.type) {
    case 'update':
      return {lang: action.lang};
    default:
      return {lang: action.lang}
  }
}

function information(lang: String){
  switch(lang){
    case 'EN': 
       return ["EN", "EN2"];
    case 'SP': 
      return ["SP", "SP2"]
    default: 
      return ["", ""];
  }
}

export default function App() {
  let [state, dispatch] = useReducer(languageReducer, {lang: 'EN'});
  
  useEffect(() => {
    let info = information(state.lang);
  }, [state.lang]);
  
  return (
    <div className="home">
      <LanguageStore.Provider value={state.lang}>
        <LanguageSetStore.Provider value={dispatch}>
          <Navbar />
        </LanguageSetStore.Provider>
        {Footer()}
      </LanguageStore.Provider>
    </div>
  );
}

export {LanguageSetStore, LanguageStore, App};
