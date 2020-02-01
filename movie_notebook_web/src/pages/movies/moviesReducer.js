import { Record, List } from 'immutable';

import {
  FETCH_MOVIES, SELECT_MOVIE, SAVE_MOVIE, DELETE_MOVIE,
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
    case SAVE_MOVIE: {
      const savedMovie = action.payload.movie;
      const index = state.list.findIndex((movie) => movie.tmdbId === savedMovie.tmdbId);
      if (index === -1) {
        return state;
      }
      return state.merge({
        list: state.list.set(index, savedMovie),
      });
    }
    case DELETE_MOVIE: {
      const updatedList = state.list
        .map((movie) => (movie.id === action.payload.id ? movie.set('id', null) : movie));
      return state.merge({
        list: updatedList,
      });
    }
    default:
      return state;
  }
}
