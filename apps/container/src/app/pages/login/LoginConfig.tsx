import { lazy } from 'react';
import { IPageConfig } from '../../../types/pageConfig';
import Login from './Login';

const LoginConfig: IPageConfig = {
  settings: {
    showHeader: false,
  },
  routes: [
    {
      path: '/login',
      element: <Login />,
    },
  ],
};

export default LoginConfig;
