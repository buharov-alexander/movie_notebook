import { combineReducers } from 'redux';
import moviesReducer from 'pages/movies/moviesReducer';
import searchReducer from 'pages/search/searchReducer';
import pagesReducer from 'pages/pagesReducer';

export default combineReducers({
  movies: moviesReducer,
  search: searchReducer,
  pages: pagesReducer,
});
