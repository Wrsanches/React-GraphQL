const INITIAL_STATE = {
  isLoggedIn: false,
  loginError: false,
  id: null,
  firstName: null,
  lastName: null,
  token: null
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        loginError: false,
        id: action.id,
        firstName: action.firstName,
        lastName: action.lastName,
        token: action.token
      };
    case 'LOGIN_ERROR':
      return {
        isLoggedIn: false,
        loginError: true,
        id: null,
        firstName: null,
        lastName: null,
        token: null
      };

    case 'LOGOUT':
      return {
        isLoggedIn: false,
        loginError: false,
        id: null,
        firstName: null,
        lastName: null,
        token: null
      };

    default:
      return INITIAL_STATE;
  }
};

export default auth;
