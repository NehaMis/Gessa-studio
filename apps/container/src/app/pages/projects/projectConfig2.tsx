import { Navigate } from 'react-router-dom';
import AddProject from './components/AddProject';
import ProjectWrapper from './components/ProjectWrapper';
import Project from './Project';
import ProjectTabs from './ProjectTabs';

const MyRoutes = {
  routes: [
    {
      path: '',
      element: <Navigate to="project" />,
    },
    {
      path: 'project',
      element: <ProjectWrapper />,
      children: [
        {
          path: 'add-project',
          element: <></>,
        },
      ],
    },
    {
      path: 'pipeline',
      element: <ProjectWrapper />,
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
      element: <ProjectWrapper />,
      children: [
        {
          path: 'edit-connector',
          element: <></>,
        },
      ],
    },
  ],
};

export default MyRoutes;
