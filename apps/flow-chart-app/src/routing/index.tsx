import { Navigate } from 'react-router-dom';
import FlowChartConfig from '../app/pages/flow-chart/FlowChartConfig';
import { IRoute } from '../types/routes';

const routeConfigs: Array<IRoute> = [...FlowChartConfig.routes];

const routes: Array<IRoute> = [
  ...routeConfigs,
  {
    path: '/',
    exact: true,
    element: <Navigate to="/chart" />,
  },
];

export default routes;
