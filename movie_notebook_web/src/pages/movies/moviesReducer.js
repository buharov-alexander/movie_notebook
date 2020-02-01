import { Record, List } from 'immutable';

import {
  FETCH_MOVIES, SELECT_MOVIE,
} from 'constants/actionTypes';

const MoviesState = Record({
  list: List(),
  selectedTmdbId: null,
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
        selectedTmdbId: action.payload.id,
      });
    }
    default:
      return state;
  }
}
