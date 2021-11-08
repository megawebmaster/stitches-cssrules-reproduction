import React from 'react';

import { styled } from '../stitches';

const BaseButton = React.forwardRef((props, ref) => <button type="button" {...props} ref={ref} />);

export const Button = styled(BaseButton, {
  border: 0,
  background: '$primary-color',
  padding: '$small',
  color: '$text-light',
  fontSize: '1em',

  '&:hover': {
    backgroundColor: '$primary-hover-color',
    cursor: 'pointer',
  },

  variants: {
    warning: {
      true: {
        backgroundColor: '$alert-color',

        '&:hover': {
          backgroundColor: '$alert-hover-color',
        }
      }
    }
  }
});
