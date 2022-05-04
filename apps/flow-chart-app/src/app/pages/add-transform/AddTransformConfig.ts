import { lazy } from 'react';
import { IPageConfig } from '../../../types/pageConfig';

const AddTransformConfig: IPageConfig = {
  // settings: {
  //   showHeader: true,
  // },
  routes: [
    {
      path: '/add-transform-pipeline',
      component: lazy(() => import('./AddTransform')),
      showInNavbar: true,
      name: 'Add Transform',
    },
  ],
};

export default AddTransformConfig;
