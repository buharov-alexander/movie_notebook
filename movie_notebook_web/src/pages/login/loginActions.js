import { signInRequest } from 'api/userApi';
import { request } from 'api/utils';
import { selectPage } from 'pages/pagesActions';
import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from 'constants/actionTypes';
import { MOVIES_PAGE } from 'constants/pageTypes';

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
