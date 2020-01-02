import {
  SEARCH_PAGE,
} from 'constants/pageTypes';
import {
  SELECT_PAGE,
} from 'constants/actionTypes';

export const selectPage = (activePage, history) => (dispatch) => {
  switch (activePage) {
    case SEARCH_PAGE: {
      history.push('/search');
      break;
    }
    default: {
      history.push('/movies');
    }
  }
  dispatch({ type: SELECT_PAGE, payload: { activePage } });
};
