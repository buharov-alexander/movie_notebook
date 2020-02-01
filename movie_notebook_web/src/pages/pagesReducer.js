import { Record } from 'immutable';

import {
  PAGE_CHANGED,
} from 'constants/actionTypes';
import {
  MOVIES_PAGE,
} from 'constants/pageTypes';

const PagesState = Record({
  activePage: MOVIES_PAGE,
});

export default function moviesReducer(state = PagesState({}), action) {
  switch (action.type) {
    case PAGE_CHANGED: {
      return state.merge({
        activePage: action.payload.page,
      });
    }
    default:
      return state;
  }
}
