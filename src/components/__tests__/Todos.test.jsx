
import React from 'react';
import * as rtl from '@testing-library/react';
import Todos from '../Todos';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<Todos user='Peter' />);
});

describe('Todos component', () => {

});
