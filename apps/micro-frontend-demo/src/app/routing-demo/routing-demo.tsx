import { Button, Typography } from '@mui/material';
import React from 'react';
import { useLocation, useParams, Link, withRouter } from 'react-router-dom';
// import Test from '../test/test';
// import Child from './child';
// import Parent from './parent';

const Parent = React.lazy(() => import('./parent'));
const Child = React.lazy(() => import('./child'));

const RoutingDemo = (props: any) => {
  const location = useLocation();

  return (
    <div>
      <Typography variant="body1">Routing</Typography>
      <Link to={'/routing-demo/parent'}>
        <Button>Parent</Button>
      </Link>
      <Link to={'/routing-demo/parent/child'}>
        <Button>Child</Button>
      </Link>

      {/* {location.pathname.includes('/parent') && <Parent />}
      {location.pathname.includes('/child') && <Child />} */}
      {location.pathname.includes('/parent') && (
        <React.Suspense fallback="Loading Parent">
          <Parent />
        </React.Suspense>
      )}
      {location.pathname.includes('/child') && (
        <React.Suspense fallback="Loading Child">
          <Child />
        </React.Suspense>
      )}
      {/* <Test /> */}
    </div>
  );
};

export default withRouter(RoutingDemo);
