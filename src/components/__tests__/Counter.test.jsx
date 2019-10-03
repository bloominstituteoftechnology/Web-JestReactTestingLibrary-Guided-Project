import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
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

  it('can increment the count by clicking on the increment', () => {
    const incButton = tools.queryByText(/increment/);
    fireEvent.click(incButton);

    const elementWithZero = tools.queryByText(/0/);
    const elementWithTwo = tools.queryByText(/3/);

    expect(elementWithZero).not.toBeInTheDocument();
    expect(elementWithTwo).toBeInTheDocument();
  });
});
