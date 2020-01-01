import {
  SELECT_PAGE,
} from 'constants/actionTypes';

export const selectPage = (activePage) => (dispatch) => {
  dispatch({ type: SELECT_PAGE, payload: { activePage } });
};
