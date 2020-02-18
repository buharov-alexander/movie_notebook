import Cookies from 'js-cookie';
import {
  REQUEST,
  REQUEST_SUCCESS,
  REQUEST_FAILED,
} from 'constants/actionTypes';

export const csrfFetch = (url, params) => {
  const csrf = {
    'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
  };
  const headers = { headers: { ...params.headers, ...csrf } };
  return fetch(url, { ...params, ...headers });
};

export const request = ({
  operation,
  params,
  dispatch,
  type,
}) => {
  dispatch({ type: REQUEST, payload: type });
  return operation(params).then(
    (result) => {
      dispatch({ type: REQUEST_SUCCESS, payload: type });
      return result;
    },
    () => dispatch({ type: REQUEST_FAILED, payload: type }),
  );
};
