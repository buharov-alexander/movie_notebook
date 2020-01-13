import {
  SELECT_FOUND_MOVIE,
} from 'constants/actionTypes';

export const searchMovies = (query) => (dispatch) => {
  console.log(query);
};

export const selectFoundMovie = (selectedIndex) => (dispatch) => {
  dispatch({ type: SELECT_FOUND_MOVIE, payload: { selectedIndex } });
};
