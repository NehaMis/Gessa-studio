import { lazy } from 'react';
import { IPageConfig } from '../../../types/pageConfig';

const ProjectDetailsConfig: IPageConfig = {
  settings: {
    showHeader: true,
  },
  routes: [
    {
      path: '/project-details',
      component: lazy(() => import('./ProjectDetails')),
      showInNavbar: true,
      name: 'Project Details',
    },
  ],
};

export default ProjectDetailsConfig;
