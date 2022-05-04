import { Suspense, useContext } from 'react';
import { renderRoutes } from 'react-router-config';
import { RouteContext } from '../../context';

const Layout = () => {
  const { routes, addRoute, removeRoute } = useContext(
    RouteContext
  ) as RouteContextType;

  return (
    <div className="flex w-full overflow-hidden">
      <div className="w-20 h-screen bg-gray-400"></div>
      <div className="flex flex-col flex-1">
        <div className="flex-1">
          <Suspense fallback="Loading...">{renderRoutes(routes)}</Suspense>
        </div>
      </div>
    </div>
  );
};

export default Layout;
