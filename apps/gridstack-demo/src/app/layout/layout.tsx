import { Suspense, useContext } from 'react';
import { renderRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import { RouteContext } from '../../context';
import Loader from '../components/loader/Loader';
import { useRoutes } from 'react-router';
import { RouteContextType } from '../../types/routes';
const Layout = (props: any) => {
  const newRoutes: any = useContext(RouteContext) as RouteContextType;
  // const myRoutes: any = MyRoutes.routes;

  // const routes = useRoutes([...myRoutes]);
  const routes = useRoutes([...newRoutes.routes]);
  return routes;
};

const LayoutWrapper = (props: any) => {
  return <Layout />;
};

export default LayoutWrapper;
