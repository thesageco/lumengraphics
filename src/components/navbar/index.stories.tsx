import React from 'react';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';
import Navbar from '../navbar'

import {LanguageSetStore} from '../../App'

export default {
  title: 'Navbar',
  component: Navbar,
};

export const Default = () =>  {
  return (
    <LanguageSetStore.Provider value={action('LangChanged')}>
      <Navbar />
    </LanguageSetStore.Provider>
  );
}
