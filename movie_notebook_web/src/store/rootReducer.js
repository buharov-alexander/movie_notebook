import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import moviesReducer from 'pages/movies/moviesReducer';
import searchReducer from 'pages/search/searchReducer';
import pagesReducer from 'pages/pagesReducer';
import loginReducer from 'pages/login/loginReducer';

export default combineReducers({
  movies: moviesReducer,
  search: searchReducer,
  pages: pagesReducer,
  login: loginReducer,
  form: formReducer,
});
