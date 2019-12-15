import React from 'react';

import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import Router from 'routing/Router';
import './App.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
