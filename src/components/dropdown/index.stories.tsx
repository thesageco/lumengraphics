import React from 'react';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';
import Dropdown from '../dropdown'
import {LanguageSetStore} from '../../App'

export default {
  title: 'Dropdown',
  component: Dropdown,
};

export const Normal = () =>  {
  return (
  <LanguageSetStore.Provider value={action('LangChanged')}>
    {Dropdown({
      options: ["Option1", "Option2", "Option3"]
    })}
  </LanguageSetStore.Provider>
)
}
