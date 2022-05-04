import { Navigate } from 'react-router-dom';
import SchemaMFConfig from '../app/pages/schema/SchemaMFConfig';
import { IRoute } from '../types/routes';

const routeConfigs: Array<IRoute> = [...SchemaMFConfig.routes];

const routes: Array<IRoute> = [
  ...routeConfigs,
  {
    path: '/',
    exact: true,
    element: <Navigate to="/Schema" />,
  },
];

export default routes;
