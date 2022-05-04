import Navbar2 from '../../components/navbar2/navbar2';
import RoutesContext from '../../../context/routes';
import routes from '../../../routing/routesConfig';
import { Route, Router } from 'react-router';
import history from '../../../utils/history';

import TabsContainer from './TabsContainer';
import { Suspense, useEffect } from 'react';
import { renderRoutes } from 'react-router-config';
import AddProjectForm from './add-project/add-project-form';
import { Link } from 'react-router-dom';
import AddProject from './add-project/add-project';

const EndPoints = () => {
  return (
    <div>
      <div className="flex w-full flex-row flex-grow">
        <Navbar2 />
        {/* <div>tabscontainer</div> */}
        <RoutesContext.Provider
          value={{
            routes,
          }}
        >
          <Router history={history}>
            <Route path="/"></Route>

            <Route
              path="/projects/end-points"
              exact
              component={TabsContainer}
            ></Route>
            <Route
              path={[
                '/projects/end-points/add-project',
                '/projects/end-points/add-connector',
                '/projects/end-points/add-pipeline',
              ]}
              component={AddProject}
            ></Route>
          </Router>
        </RoutesContext.Provider>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <div className="flex w-full">
  //       <Navbar2 />
  //       <RoutesContext.Provider
  //         value={{
  //           routes,
  //         }}
  //       >
  //         <Router history={history}>
  //           <Suspense fallback="Loading...">{renderRoutes(routes)}</Suspense>
  //         </Router>
  //       </RoutesContext.Provider>

  //       <TabsContainer />
  //     </div>
  //   </div>
  // );
};

export default EndPoints;
