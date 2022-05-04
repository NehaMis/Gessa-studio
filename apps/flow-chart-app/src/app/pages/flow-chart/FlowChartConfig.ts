import { lazy } from 'react';
import { IPageConfig } from '../../../types/pageConfig';

const FlowChart = lazy(() => import('./FlowChart'));

const FlowChartConfig: IPageConfig = {
  routes: [
    {
      path: '/chart',
      element: lazy(() => import('./FlowChart')),
      showInNavbar: true,
      name: 'Chart',
    },
    {
      path: '/add-nodes',
      element: lazy(() => import('./../add-nodes/AddNodes')),
      showInNavbar: true,
      name: 'Add Nodes',
    },
    {
      path: '/add-pipeline',
      element: lazy(() => import('./components/add-pipeline/add-pipeline-v2')),
      showInNavbar: true,
      name: 'Add Pipeline',
    },
    {
      path: '/add-transform',
      element: lazy(() => import('./../add-transform/AddTransform')),
      showInNavbar: true,
      name: 'Add Nodes',
    },
    {
      path: '/transform2',
      element: lazy(() => import('./components/add-transform2/AddTransform2')),
      showInNavbar: true,
      name: 'Add Transform',
    },
    {
      path: '/summary',
      element: lazy(() => import('./components/summary-page/SummaryPage')),
      showInNavbar: false,
      name: 'Summary',
    },
  ],
};

export default FlowChartConfig;
