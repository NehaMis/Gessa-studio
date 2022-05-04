import { lazy } from 'react';
import { IPageConfig } from '../../../types/pageConfig';

const DataOpsConfig: IPageConfig = {
  routes: [
    {
      path: '/data-ops',
      component: lazy(() => import('./DataOps')),
      showInNavbar: true,
      name: 'Data Ops',
    },
  ],
};

export default DataOpsConfig;
