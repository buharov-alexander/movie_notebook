import { Record, List } from 'immutable';

import {
  SEARCH_MOVIES, SELECT_FOUND_MOVIE, TYPPING_TIMEOUT, SAVE_MOVIE,
} from 'constants/actionTypes';

const SearchState = Record({
  list: List(),
  selectedTmdbId: null,
  tappingTimeoutId: 0,
});

export default function moviesReducer(state = SearchState({}), action) {
  switch (action.type) {
    case SEARCH_MOVIES: {
      return state.merge({
        list: action.payload.foundMovies,
      });
    }
    case SELECT_FOUND_MOVIE: {
      return state.merge({
        selectedTmdbId: action.payload.id,
      });
    }
    case TYPPING_TIMEOUT: {
      return state.merge({
        tappingTimeoutId: action.payload.timeoutId,
      });
    }
    case SAVE_MOVIE: {
      const savedMovie = action.payload.movie;
      const index = state.list.findIndex((movie) => movie.tmdbId === savedMovie.tmdbId);
      return state.merge({
        list: state.list.set(index, savedMovie),
      });
    }
    default:
      return state;
  }
}
