import { SELECT_PAGE, PAGE_CHANGED } from 'constants/actionTypes';

export const selectPage = (activePage, history) => (dispatch) => {
  history.push(activePage);
  dispatch({ type: SELECT_PAGE, payload: { activePage } });
};

export const pageChanged = (page) => (dispatch) => {
  dispatch({ type: PAGE_CHANGED, payload: { page } });
};
