import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './App.css';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div>Test</div>
  </Provider>
);

export default App;
