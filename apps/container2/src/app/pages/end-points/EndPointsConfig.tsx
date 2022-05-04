// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { IRoutes } from 'apps/container2/src/routing/routesConfig';
import { lazy } from 'react';

const EndPointsConfig: IRoutes = {
  routes: [
    {
      path: '/projects/end-points',
      component: lazy(() => import('./EndPoints')),
      showInNavbar: true,
      name: 'End Points',
    },
  ],
};

export default EndPointsConfig;
