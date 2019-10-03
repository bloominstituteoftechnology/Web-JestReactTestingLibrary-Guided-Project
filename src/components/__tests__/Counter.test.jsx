import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Counter from '../Counter';

let tools;

// a jest thing
// the code inside the callback
// will run before each test
beforeEach(() => {
  cleanup();
  tools = render(<Counter user='Peter' />);
});

describe('Counter component', () => {
  it('runs', () => {
    tools.debug();
  });

  it('shows the correct user', () => {
    const elementWithJoshText = tools.queryByText(/peter/i);
    expect(elementWithJoshText).toBeInTheDocument();
  });

  it('initial count is zero', () => {
    const elementWithZero = tools.queryByText(/0/);
    expect(elementWithZero).toBeInTheDocument();
  });
});
