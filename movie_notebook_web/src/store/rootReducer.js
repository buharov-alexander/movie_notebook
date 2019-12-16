import { combineReducers } from 'redux';
import moviesReducer from 'pages/movies/moviesReducer';

export default combineReducers({
  movies: moviesReducer,
});
