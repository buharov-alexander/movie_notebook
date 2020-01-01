import { combineReducers } from 'redux';
import moviesReducer from 'pages/movies/moviesReducer';
import pagesReducer from 'pages/pagesReducer';

export default combineReducers({
  movies: moviesReducer,
  pages: pagesReducer,
});
