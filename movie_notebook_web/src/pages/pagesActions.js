import {
  SEARCH_PAGE, MOVIES_PAGE,
} from 'constants/pageTypes';
import {
  SELECT_PAGE, PAGE_CHANGED,
} from 'constants/actionTypes';

export const selectPage = (activePage, history) => (dispatch) => {
  switch (activePage) {
    case SEARCH_PAGE: {
      history.push(SEARCH_PAGE);
      break;
    }
    default: {
      history.push(MOVIES_PAGE);
    }
  }
  dispatch({ type: SELECT_PAGE, payload: { activePage } });
};

export const pageChanged = (page) => (dispatch) => {
  dispatch({ type: PAGE_CHANGED, payload: { page } });
};
