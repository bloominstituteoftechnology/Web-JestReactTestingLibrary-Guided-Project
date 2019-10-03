
import React from 'react';
import * as rtl from '@testing-library/react';
import Todos from '../Todos';

jest.mock('axios', () => {
  return {
    get: () => {
      return Promise.resolve({
        data: [
          { name: 'sweeping', id: '1', completed: false },
        ],
      });
    },
  };
});

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<Todos user='Peter' />);
});

describe('Todos component', () => {
  it('can render a todo that comes from api', () => {
    const elementWithSweeping = tools.queryByText(/sweeping/);
    expect(elementWithSweeping).toBeInTheDocument();
  });
});
