import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router';
import { IPageConfig } from '../../../types/pageConfig';

const Demo2Wrapper = lazy(() => import('./Demo2'));

const ProjectConfig: IPageConfig = {
  settings: {
    showHeader: true,
  },
  routes: [
    {
      path: '',
      element: <Navigate to="demo" />,
    },
    {
      path: 'demo',
      element: (
        <Suspense fallback={<>...</>}>
          <Demo2Wrapper />
        </Suspense>
      ),
      children: [
        {
          path: 'add-project',
          element: <></>,
        },
      ],
    },
  ],
};

export default ProjectConfig;
