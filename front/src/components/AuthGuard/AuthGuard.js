// React
import { useEffect } from 'react';

// Utils
import api from '../../utils/axios';

// External Packages
import PropTypes from 'prop-types';

// React Redux
import { logout } from '../../store/actions/auth';
import { useSelector, useDispatch } from 'react-redux';

// React Router
import { useHistory } from 'react-router-dom';

const AuthGuard = (props) => {
  const { children } = props;

  const history = useHistory();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/');
      return;
    }

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    (async () => {
      try {
        const {
          data: {
            data: { validateToken }
          }
        } = await api.post('/graphql', {
          query: `
            query validateToken {
              validateToken
            }
          `
        });

        if (validateToken !== true) {
          dispatch(logout());
          history.push('/');
          return;
        }
      } catch (e) {
        dispatch(logout());
        history.push('/');
        return;
      }
    })();
  }, [isLoggedIn, history, dispatch, token]);

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node
};

export default AuthGuard;
