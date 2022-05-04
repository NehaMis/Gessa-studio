import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import ProjectDetailsConfig from '../app/pages/project-details/ProjectDetailsConfig';
import LoginConfig from '../app/pages/login/LoginConfig';
import { IPageConfig } from '../types/pageConfig';
import getRoutesFromConfig from '../utils/getRoutesFromConfig';

const routeConfigs: Array<IPageConfig> = [ProjectDetailsConfig, LoginConfig];

const routes: Array<IRoute> = [
  ...getRoutesFromConfig(routeConfigs),
  {
    path: '/',
    exact: true,
    component: () => <Navigate to="/project-details" />,
  },
];

export default routes;
