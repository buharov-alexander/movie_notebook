import { Record, List } from 'immutable';

import {
  FETCH_MOVIES,
} from 'constants/actionTypes';

const MoviesState = Record({
  list: List(),
});

export default function moviesReducer(state = MoviesState({}), action) {
  switch (action.type) {
    case FETCH_MOVIES: {
      return state.merge({
        list: action.payload.movies,
      });
    }
    default:
      return state;
  }
}
