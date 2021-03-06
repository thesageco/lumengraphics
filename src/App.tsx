import React, { useReducer } from 'react';
import {Helmet} from "react-helmet";
import './App.scss';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Card from './components/card';

import {CardAssets} from './assets';

interface CardData {
  description: string;
  descriptionESP: string;
}

const cards: CardData[] = require('./assets/cards.json');

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

export default function App() {
  let [state, dispatch] = useReducer(languageReducer, {lang: 'ENG'});
  
  return (
    <div className="home">
    <Helmet htmlAttributes={{ lang : state.lang.substring(0,2).toLowerCase() }}/>
      <LanguageStore.Provider value={state.lang}>
        <LanguageSetStore.Provider value={dispatch}>
          <Navbar />
        </LanguageSetStore.Provider>
        <div className="cards">
          {cards.map((card, i) => {
              return (
                Card({
                  key: i,
                  image: String(CardAssets[card.description]),
                  image_alt: card.description,
                  description: state.lang === "ENG" ? card.description : card.descriptionESP,
                })
              )
          })}
        </div>
        {Footer()}
      </LanguageStore.Provider>
    </div>
  );
}

export {LanguageSetStore, LanguageStore, App};
