import { Record, List } from 'immutable';

import {
  SEARCH_MOVIE, SELECT_FOUND_MOVIE,
} from 'constants/actionTypes';

const SearchState = Record({
  list: List(),
  selectedIndex: null,
});

export default function moviesReducer(state = SearchState({}), action) {
  switch (action.type) {
    case SEARCH_MOVIE: {
      return state.merge({
        list: action.payload.foundMovies,
      });
    }
    case SELECT_FOUND_MOVIE: {
      return state.merge({
        selectedIndex: action.payload.selectedIndex,
      });
    }
    default:
      return state;
  }
}
