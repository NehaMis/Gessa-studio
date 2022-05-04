import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router';
import { IPageConfig } from '../../../types/pageConfig';

const ProjectWrapper = lazy(() => import('./components/ProjectWrapper'));

const ProjectConfig: IPageConfig = {
  settings: {
    showHeader: true,
  },
  routes: [
    {
      path: '',
      element: <Navigate to="project" />,
    },
    {
      path: 'project',
      element: (
        <Suspense fallback={<>...</>}>
          <ProjectWrapper />
        </Suspense>
      ),
      children: [
        {
          path: 'add-project',
          element: <></>,
        },
      ],
    },
    {
      path: 'pipeline',
      element: (
        <Suspense fallback={<>...</>}>
          <ProjectWrapper />
        </Suspense>
      ),
      children: [
        {
          path: ':id/definition',
          element: <></>,
        },
        {
          path: ':id/stats',
          element: <></>,
        },
        {
          path: ':id/schedule',
          element: <></>,
        },
      ],
    },
    {
      path: 'connector',
      element: (
        <Suspense fallback={<>...</>}>
          <ProjectWrapper />
        </Suspense>
      ),
      children: [
        {
          path: 'edit-connector',
          element: <></>,
        },
      ],
    },
  ],
};

export default ProjectConfig;
