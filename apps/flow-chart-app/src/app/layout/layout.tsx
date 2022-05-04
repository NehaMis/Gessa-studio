import { useContext } from 'react';
import { useRoutes } from 'react-router';
import { RouteContext } from '../../context';
// import { RouteContextType } from '../../types/routes';
import MyRoutes from '../pages/flow-chart/projectConfig2';

const Layout = (props: any) => {
  // const newRoutes: any = useContext(RouteContext) as RouteContextType;
  const myRoutes: any = MyRoutes.routes;
  const routes = useRoutes([...myRoutes]);
  console.log("routes array", routes)
  return routes;
};

const LayoutWrapper = (props: any) => {
  return <Layout />;
};

export default LayoutWrapper;
