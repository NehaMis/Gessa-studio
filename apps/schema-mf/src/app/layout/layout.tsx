import { useContext, useEffect } from 'react';
import { useRoutes } from 'react-router';
import { RouteContext } from '../../context';
import { RouteContextType } from '../../types/routes';
/* import MyRoutes from '../pages/projects/projectConfig2'; */
const Layout = (props: any) => {
  const newRoutes: any = useContext(RouteContext) as RouteContextType;
/*   const myRoutes: any = MyRoutes.routes; */
  // const routes = useRoutes([...myRoutes]);
  const routes = useRoutes([...newRoutes.routes]);
  return routes;

};
const LayoutWrapper = (props: any) => {
  return <Layout />;
};

export default LayoutWrapper;
