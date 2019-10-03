import React from 'react';
import * as rtl from '@testing-library/react';
import Counter from '../Counter';

let tools;

// a jest thing
// the code inside the callback
// will run before each test
beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<Counter user='Peter' />);
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
    let elementWithZero = tools.queryByText(/0/);
    expect(elementWithZero).toBeInTheDocument();

    const incButton = tools.queryByTestId('incButton');
    rtl.fireEvent.click(incButton);

    elementWithZero = tools.queryByText(/0/);
    const elementWithTwo = tools.queryByText(/3/);

    expect(elementWithZero).not.toBeInTheDocument();
    expect(elementWithTwo).toBeInTheDocument();
  });
});
