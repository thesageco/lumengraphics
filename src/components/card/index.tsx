import React from 'react';
import './index.scss';

interface CardProp {
  key?: number;
  image: string;
  image_alt: string;
  description: string;
}

export default function Card(props: CardProp) {
  return (
    <div className="card" key={props.key}>
      <img src={props.image} alt={props.image_alt} />
      <p>{props.description}</p>
    </div>
  );

};
