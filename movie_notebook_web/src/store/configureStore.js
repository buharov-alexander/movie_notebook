import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const configureStore = () => createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk,
    ),
    // eslint-disable-next-line no-undef, no-underscore-dangle
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default configureStore;
