/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';

import '../App.scss';
import { Button } from './button.styled.jsx';

export default {
  title: 'Button',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    warning: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const Basic = ({ label, warning }) => (
  <div id="react-target">
    <Button onClick={action('click')} warning={warning}>
      {label}
    </Button>
  </div>
);
Basic.args = {
  label: 'Test',
  warning: false,
};
