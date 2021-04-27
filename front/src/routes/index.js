/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */

// React
import React from 'react';

// AuthGuard
import { AuthGuard } from '../components';

// Views
import Login from '../views/Login';
import Loan from '../views/Loan';
import Offer from '../views/Offer';
import Congratulations from '../views/Congratulations';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Login />
  },
  {
    path: '/loan',
    exact: true,
    component: () => (
      <AuthGuard>
        <Loan />
      </AuthGuard>
    )
  },
  {
    path: '/offer/:loanId',
    exact: true,
    component: () => (
      <AuthGuard>
        <Offer />
      </AuthGuard>
    )
  },
  {
    path: '/congrats',
    exact: true,
    component: () => (
      <AuthGuard>
        <Congratulations />
      </AuthGuard>
    )
  }
];

export default routes;
