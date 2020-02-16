import { signInRequest, logoutRequest, currentUserRequest } from 'api/userApi';
import { request } from 'api/utils';
import { selectPage } from 'pages/pagesActions';
import {
  SIGN_IN_SUCCESS, SIGN_IN_FAILURE, LOGOUT_SUCCESS, CURRENT_USER,
} from 'constants/actionTypes';
import { MOVIES_PAGE, LOGOUT_PAGE } from 'constants/pageTypes';

export const signIn = ({ username, password, history }) => (dispatch) => {
  request({
    operation: signInRequest,
    params: { username, password },
    dispatch,
    type: 'signIn',
  }).then((response) => {
    if (response.url && response.url.includes('error')) {
      dispatch({ type: SIGN_IN_FAILURE });
    } else {
      dispatch({ type: SIGN_IN_SUCCESS, payload: { username } });
      selectPage(MOVIES_PAGE, history)(dispatch);
    }
  });
};

export const logout = (history) => (dispatch) => {
  request({
    operation: logoutRequest,
    dispatch,
    type: 'logout',
  }).then(() => {
    dispatch({ type: LOGOUT_SUCCESS });
    selectPage(LOGOUT_PAGE, history)(dispatch);
  });
};

export const getCurrentUser = () => (dispatch) => {
  request({
    operation: currentUserRequest,
    dispatch,
    type: 'getCurrentUser',
  }).then((user) => {
    dispatch({ type: CURRENT_USER, payload: user });
  });
};
