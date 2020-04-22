import React, { useReducer } from 'react';
import './App.scss';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Card from './components/card';

import {CardAssets} from './assets';

interface CardData {
  link: string;
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
      <LanguageStore.Provider value={state.lang}>
        <LanguageSetStore.Provider value={dispatch}>
          <Navbar />
        </LanguageSetStore.Provider>
        <div className="cards">
          {cards.map((card, i) => {
              return (
                Card({
                  key: i,
                  link: card.link,
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
