import React from 'react';
import './index.scss';

interface CardProp {
  key?: number;
  link: string;
  image: string;
  image_alt: string;
  description: string;
}

export default function Card(props: CardProp) {
  return (
    <a className="card" href={props.link} key={props.key}>
      <img src={props.image} alt={props.image_alt} />
      <p>{props.description}</p>
    </a>
  );

};
