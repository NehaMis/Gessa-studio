import generateRoutesFromConfigs from '../utils/generateRoutes';
import { Navigate } from 'react-router-dom';
import { Card } from '../app/components/chart/Card';
import DataFlowConfig from '../app/pages/data-flow/DataFlowConfig';
import EndPointsConfig from '../app/pages/end-points/EndPointsConfig';
import microFrontendDemoRoutes from 'microFrontendDemo/routes';
import { lazy } from 'react';
import React from 'react';
import { FunctionComponent } from 'hoist-non-react-statics/node_modules/@types/react';

export type IRouteConfig = Array<IRoutes>;
export interface IRoutes {
  routes: Array<IRoute>;
}

export interface IRoute {
  path: string;
  component: React.LazyExoticComponent<FunctionComponent>;
  showInNavbar?: boolean;
  name?: string;
}

const routeConfigs: IRouteConfig = [
  // DataFlowConfig,
  EndPointsConfig,
];

const routes = [
  ...generateRoutesFromConfigs(routeConfigs, null),
  {
    path: '/',
    exact: true,
    component: () => <Navigate to="/projects/end-points" />,
  },
  ...microFrontendDemoRoutes,
  // {
  //   path: '/error',
  //   component: () => <Navigate to="/pages/errors/error-404" />,
  //   showInNavbar: true,
  //   name: 'Error',
  // },
];

export default routes;
