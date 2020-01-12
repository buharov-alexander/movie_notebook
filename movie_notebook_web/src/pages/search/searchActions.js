import {
  SELECT_FOUND_MOVIE,
} from 'constants/actionTypes';

export const searchMovie = () => (dispatch) => {};

export const selectFoundMovie = (selectedIndex) => (dispatch) => {
  dispatch({ type: SELECT_FOUND_MOVIE, payload: { selectedIndex } });
};
