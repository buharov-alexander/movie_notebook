import { Record, List } from 'immutable';

import {
  FETCH_MOVIES, SELECT_MOVIE,
} from 'constants/actionTypes';

const MoviesState = Record({
  list: List(),
  selectedIndex: null,
});

export default function moviesReducer(state = MoviesState({}), action) {
  switch (action.type) {
    case FETCH_MOVIES: {
      return state.merge({
        list: action.payload.movies,
      });
    }
    case SELECT_MOVIE: {
      return state.merge({
        selectedIndex: action.payload.selectedIndex,
      });
    }
    default:
      return state;
  }
}
