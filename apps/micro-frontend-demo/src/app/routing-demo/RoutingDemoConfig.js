import { lazy } from 'react';
import routingDemo from './routing-demo';
import Test from '../test/test';

const RoutingDemoComponent = lazy(() => import('./routing-demo'));

const RoutingDemoConfig = [
  {
    path: '/routing-demo',
    // component: lazy(() => import('./routing-demo')),
    // component: routingDemo,
    component: RoutingDemoComponent,
    showInNavbar: true,
    exact: true,
    name: 'Routing Demo',
  },
  {
    path: '/routing-demo/:parent',
    // component: lazy(() => import('./routing-demo')),
    // component: routingDemo,
    component: RoutingDemoComponent,
    exact: true,
  },
  {
    path: '/routing-demo/:parent/:child',
    // component: lazy(() => import('./routing-demo')),
    // component: routingDemo,
    component: RoutingDemoComponent,
    exact: true,
  },
];

export default RoutingDemoConfig;
