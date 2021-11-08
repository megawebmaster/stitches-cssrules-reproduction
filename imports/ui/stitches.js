import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      background: '#ffffff',
      'text-color': '#353a39',
      'text-light': '$background',
      'text-secondary-color': '#75807d',

      'primary-color': '#13ab80',
      'primary-hover-color': '#16ca98',

      'alert-color': '#e85454',
      'alert-hover-color': '#ff5c5c',
    },
    space: {
      large: '20px',
      medium: '10px',
      small: '5px',
    }
  },
});
