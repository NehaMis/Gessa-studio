import { lazy } from 'react';
import { IPageConfig } from '../../../../../types/pageConfig';

const AddTransformConfig2: IPageConfig = {
  // settings: {
  //   showHeader: true,
  // },
  routes: [
    {
      path: '/transform2',
      component: lazy(() => import('./AddTransform2')),
      showInNavbar: true,
      name: 'Add Transform',
    },
  ],
};

export default AddTransformConfig2;
