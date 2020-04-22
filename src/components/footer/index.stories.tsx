import React from 'react';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';
import Footer from '../footer'

export default {
  title: 'Footer',
  component: Footer,
};

export const Default = () =>  {
  return (
      <Footer />
  );
}
