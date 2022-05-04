import { lazy } from 'react';
import { IPageConfig } from '../../../types/pageConfig';

const AddPipelineConfig: IPageConfig = {
  settings: {
    showHeader: true,
  },
  routes: [
    {
      path: '/add-pipeline',
      component: lazy(() => import('./AddPipeline')),
      showInNavbar: true,
      name: 'Add Pipeline',
    },
  ],
};

export default AddPipelineConfig;
