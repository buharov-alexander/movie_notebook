import { movieListRequest } from 'api/movieApi';
import {
  FETCH_MOVIES,
} from 'constants/actionTypes';
import { request } from 'api/utils';

export const fetchMovieList = () => (dispatch) => {
  request({
    operation: movieListRequest,
    dispatch,
    type: 'fetchMovieList',
  }).then((movies) => dispatch({ type: FETCH_MOVIES, payload: movies }));
};
