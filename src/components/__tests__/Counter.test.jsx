import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Counter from '../Counter';

let tools;

// a jest thing
// the code inside the callback
// will run before each test
beforeEach(() => {
  cleanup();
  tools = render(<Counter user='Josh' />);
});

describe('Counter component', () => {
  it('runs', () => {
    tools.debug();
  });
});
