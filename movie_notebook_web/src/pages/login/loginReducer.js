import { Record } from 'immutable';
import { SIGN_IN_SUCCESS, CURRENT_USER, LOGOUT_SUCCESS } from 'constants/actionTypes';

const LoginState = Record({
  username: null,
});

export default function moviesReducer(state = LoginState({}), action) {
  switch (action.type) {
    case CURRENT_USER:
    case SIGN_IN_SUCCESS: {
      return state.merge({
        username: action.payload.username,
      });
    }
    case LOGOUT_SUCCESS: {
      return state.merge({
        username: null,
      });
    }
    default:
      return state;
  }
}
