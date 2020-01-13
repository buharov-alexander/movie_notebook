import { Record, List } from 'immutable';

import {
  SEARCH_MOVIE, SELECT_FOUND_MOVIE, TYPPING_TIMEOUT,
} from 'constants/actionTypes';

const SearchState = Record({
  list: List(),
  selectedIndex: null,
  tappingTimeoutId: 0,
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
    case TYPPING_TIMEOUT: {
      return state.merge({
        tappingTimeoutId: action.payload.timeoutId,
      });
    }
    default:
      return state;
  }
}
