import { lazy } from 'react';
import { IPageConfig } from '../../../types/pageConfig';

const AddConnectorConfig: IPageConfig = {
  settings: {
    showHeader: true,
  },
  routes: [
    {
      path: '/add-connector',
      element: lazy(() => import('./AddConnector')),
      showInNavbar: true,
      name: 'Add Nodes',
    },
  ],
};

export default AddConnectorConfig;
