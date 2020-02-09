export const signInRequest = ({ username, password }) => fetch('/mnb/webui/login', {
  method: 'post',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `username=${username}&password=${password}`,
});
