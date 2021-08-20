import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store'
import {Provider} from 'react-redux'
import Calculator from './calculator/container';

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <Calculator />
  </Provider>,
  document.getElementById('root')
);

