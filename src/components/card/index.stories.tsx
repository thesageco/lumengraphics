import React from 'react';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';
import Card from '../card'
import apparel from '../../assets/cards/apparel.jpg'

export default {
  title: 'Card',
  component: Card,
};




export const Normal = () =>  {
  return Card({
      image: String(apparel),
      image_alt: "Apparel",
      description: "Apparel",
    });
}
