
import {
  REQUEST,
  REQUEST_SUCCESS,
  REQUEST_FAILED,
} from 'constants/actionTypes';

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
