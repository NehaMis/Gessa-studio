import { Navigate } from 'react-router-dom';
import DataOpsConfig from '../app/pages/data-ops/DataOpsConfig';

const routeConfigs: Array<IRoute> = [...DataOpsConfig.routes];

const routes: Array<IRoute> = [
  ...routeConfigs,
  {
    path: '/',
    exact: true,
    component: () => <Navigate to="/data-ops" />,
  },
];

export default routes;
