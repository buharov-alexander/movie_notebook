import { List } from 'immutable';
import { searchMovieRequest } from 'api/movieApi';
import {
  SELECT_FOUND_MOVIE,
  SEARCH_MOVIES,
} from 'constants/actionTypes';
import { request } from 'api/utils';

export const searchMovies = (query) => (dispatch) => {
  if (!query) {
    dispatch({ type: SEARCH_MOVIES, payload: { foundMovies: List() } });
    return;
  }

  request({
    operation: searchMovieRequest,
    params: { query },
    dispatch,
    type: 'fetchMovieList',
  }).then((foundMovies) => dispatch({ type: SEARCH_MOVIES, payload: foundMovies }));
};

export const selectFoundMovie = (selectedIndex) => (dispatch) => {
  dispatch({ type: SELECT_FOUND_MOVIE, payload: { selectedIndex } });
};
