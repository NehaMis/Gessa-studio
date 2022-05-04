import { Navigate } from 'react-router-dom';
import LoginConfig from '../app/pages/login/LoginConfig';
import { IPageConfig } from '../types/pageConfig';
import getRoutesFromConfig from '../utils/getRoutesFromConfig';
import ProjectConfig from '../app/pages/projects/ProjectConfig';
import ErrorConfig from '../app/pages/errors/ErrorConfig';
import ProjectWrapper from '../app/pages/projects/components/ProjectWrapper';
import { IRoute } from '../types/routes';

const routeConfigs: Array<IPageConfig> = [
  LoginConfig,
  ProjectConfig,
  ErrorConfig,
];

const routes: Array<IRoute> = [
  ...getRoutesFromConfig(routeConfigs),
  {
    path: '',
    exact: true,
    element: <Navigate to="/login" />,
  },
   {
    path: '*',
    exact: true,
    element: <Navigate to="/project" />,
  },
  /*{
    path: '*',
    element: <Navigate to="/error-404" />,
  }, */
];

// const routes: Array<any> = [
//   ...getRoutesFromConfig(routeConfigs),
//   {
//     path: '',
//     exact: true,
//     component: () => <Navigate to="/project" />,
//   },
//   {
//     component: () => <Navigate to="/error-404" />,
//   },
// ];

export default routes;
