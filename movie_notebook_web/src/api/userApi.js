import { Record } from 'immutable';
import { csrfFetch } from './utils';

export const UserRecord = Record({
  username: undefined,
});

export const signInRequest = ({ username, password }) => csrfFetch('/mnb/webui/login', {
  method: 'post',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `username=${username}&password=${password}`,
});

export const logoutRequest = () => csrfFetch('/mnb/user/logout', {
  method: 'post',
});

export const currentUserRequest = () => fetch('/mnb/user')
  .then((response) => response.json())
  .then((response) => UserRecord(response));
