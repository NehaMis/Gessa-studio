import { lazy } from 'react';

const AddProjectConfig = {
  routes: [
    {
      path: '/projects/end-points/add-project',
      component: lazy(() => import('../add-project/add-project')),
      showInNavbar: false,
      name: 'Add Project',
    },
    {
      path: '/projects/end-points/add-connector',
      component: lazy(() => import('../add-project/add-project')),
      showInNavbar: false,
      name: 'Add Connector',
    },
    {
      path: '/projects/end-points/add-pipeline',
      component: lazy(() => import('../add-project/add-project')),
      showInNavbar: false,
      name: 'Add Pipeline',
    },
  ],
};

export default AddProjectConfig;
