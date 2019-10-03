import React from 'react';
import * as rtl from '@testing-library/react';
import Form from '../Form';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<Form user='Peter' />);
});

describe('Form component', () => {

});
