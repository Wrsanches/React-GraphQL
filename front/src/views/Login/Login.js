// React
import React, { useState, useEffect } from 'react';

// Global Component
import { PrimaryButton } from '../../components';

// Styled Components
import { Page, LoginCard, Label, Input } from './styles';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// React Router
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const loginError = useSelector((state) => state.auth.loginError);

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  useEffect(() => {
    if (isLoggedIn) history.push('/loan');
  }, [isLoggedIn, history]);

  const handleChange = (event) => {
    event.persist();
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
      }
    }));
  };

  const submit = () => {
    dispatch({
      type: 'LOGIN',
      username: formState.values.username,
      password: formState.values.password
    });
  };

  return (
    <Page>
      <LoginCard>
        <Label>Username</Label>
        <Input loginError={loginError} name="username" onChange={handleChange} type="text" />

        <Label>Password</Label>
        <Input loginError={loginError} name="password" onChange={handleChange} type="password" />

        <PrimaryButton enabled onChange={submit} title="Login" />
      </LoginCard>
    </Page>
  );
};

export default Login;
