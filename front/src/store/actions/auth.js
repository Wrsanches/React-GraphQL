export const loginSuccess = (id, firstName, lastName, token) => {
  return { type: 'LOGIN_SUCCESS', id, firstName, lastName, token };
};

export const loginError = () => {
  return { type: 'LOGIN_ERROR' };
};

export const logout = () => {
  return { type: 'LOGOUT' };
};
