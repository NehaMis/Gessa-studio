// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { IRoutes } from 'apps/container2/src/routing/routesConfig';
import { lazy } from 'react';

const DataFlowConfig: IRoutes = {
  routes: [
    {
      path: '/projects/data-flow',
      component: lazy(() => import('./DataFlow')),
      showInNavbar: true,
      name: 'Data Flow',
    },
  ],
};

export default DataFlowConfig;
