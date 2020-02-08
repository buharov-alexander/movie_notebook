import { Record } from 'immutable';
import { SIGN_IN_SUCCESS } from 'constants/actionTypes';

const LoginState = Record({
  username: null,
});

export default function moviesReducer(state = LoginState({}), action) {
  switch (action.type) {
    case SIGN_IN_SUCCESS: {
      return state.merge({
        username: action.payload.username,
      });
    }
    default:
      return state;
  }
}
