import { Record } from 'immutable';

const LoginState = Record({
  username: null,
});

export default function moviesReducer(state = LoginState({}), action) {
  switch (action.type) {
    default:
      return state;
  }
}
