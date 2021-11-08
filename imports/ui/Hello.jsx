import React, { useState } from 'react';

import { Container } from './lib/container.styled';
import { Button } from './lib/button.styled';

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <Container>
      <Button onClick={increment}>Click Me</Button>
      <p>You've pressed the button {counter} times.</p>
    </Container>
  );
};
