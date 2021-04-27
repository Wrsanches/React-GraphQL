// Redux Saga - Effects
import { call, put } from 'redux-saga/effects';

// Redux - Actions
import { loginSuccess, loginError } from '../actions/auth';

// Axios
import api from '../../utils/axios';

export function* login(action) {
  try {
    const { data } = yield call(api.post, 'graphql', {
      query: `
        query login {
          login(username: "${action.username}", password: "${action.password}") {
            token
            user {
              id
              firstName
              lastName
            }
          }
        }
        `
    });

    if (data.errors) {
      console.log(data.errors);
      yield put(loginError());
      return;
    }

    const {
      data: {
        login: {
          token,
          user: { id, firstName, lastName }
        }
      }
    } = data;

    console.log(token);

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    yield put(loginSuccess(id, firstName, lastName, token));
  } catch (err) {
    console.log(err);
  }
}
