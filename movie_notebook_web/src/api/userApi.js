import { Record } from 'immutable';

export const UserRecord = Record({
  username: undefined,
});

export const signInRequest = ({ username, password }) => fetch('/mnb/webui/login', {
  method: 'post',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `username=${username}&password=${password}`,
});

export const logoutRequest = () => fetch('/mnb/webui/logout');

export const currentUserRequest = () => fetch('/mnb/user')
  .then((response) => response.json())
  .then((response) => ({ movie: UserRecord(response) }));
