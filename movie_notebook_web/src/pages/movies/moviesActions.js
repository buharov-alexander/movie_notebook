import { movieListRequest, saveMovieRequest, deleteMovieRequest } from 'api/movieApi';
import {
  FETCH_MOVIES,
  SAVE_MOVIE,
  DELETE_MOVIE,
  SELECT_MOVIE,
} from 'constants/actionTypes';
import { request } from 'api/utils';

export const fetchMovieList = () => (dispatch) => {
  request({
    operation: movieListRequest,
    dispatch,
    type: 'fetchMovieList',
  }).then((movies) => dispatch({ type: FETCH_MOVIES, payload: movies }));
};

export const selectMovie = (selectedIndex) => (dispatch) => {
  dispatch({ type: SELECT_MOVIE, payload: { selectedIndex } });
};

export const saveMovie = ({ tmdbId }) => (dispatch) => {
  request({
    operation: saveMovieRequest,
    params: { tmdbId },
    dispatch,
    type: 'saveMovie',
  }).then((movie) => dispatch({ type: SAVE_MOVIE, payload: movie }));
};

export const deleteMovie = ({ id }) => (dispatch) => {
  request({
    operation: deleteMovieRequest,
    params: { id },
    dispatch,
    type: 'deleteMovie',
  }).then(() => dispatch({ type: DELETE_MOVIE, payload: id }));
};
