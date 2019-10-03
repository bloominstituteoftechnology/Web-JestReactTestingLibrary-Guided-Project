import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './components/Todos';
import Counter from './components/Counter';
import Form from './components/Form';
import Market from './components/Market';

import './App.less';

ReactDOM.render(
  <>
    <Counter user='Pere' />
    <Todos user='Pereira' />
    <Form user='Mariam' />
    <Market user='Megan' />
  </>,
  document.querySelector('#target'));
