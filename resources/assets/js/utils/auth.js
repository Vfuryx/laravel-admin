const TokenKey = 'Admin-Token';
const User = 'Admin-User';

export function getToken() {
  return localStorage.getItem(TokenKey);
}

export function setToken(token) {
  return localStorage.setItem(TokenKey, token);
}

export function removeToken() {
  return localStorage.removeItem(TokenKey);
}

export function getUser() {
  return localStorage.getItem(User);
}

export function setUser(user) {
  return localStorage.setItem(User, user);
}

export function removeUser() {
  return localStorage.removeItem(User);
}