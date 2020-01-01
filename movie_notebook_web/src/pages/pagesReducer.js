import { Record } from 'immutable';

import {
  SELECT_PAGE,
} from 'constants/actionTypes';
import {
  MOVIES_PAGE,
} from 'constants/pageTypes';

const PagesState = Record({
  activePage: MOVIES_PAGE,
});

export default function moviesReducer(state = PagesState({}), action) {
  switch (action.type) {
    case SELECT_PAGE: {
      return state.merge({
        activePage: action.payload.activePage,
      });
    }
    default:
      return state;
  }
}
