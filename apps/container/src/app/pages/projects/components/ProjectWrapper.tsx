import { Outlet } from 'react-router';
import Project from '../Project';

const ProjectWrapper = () => {
  return (
    <div className="flex flex-row overflow-y-hidden">
      <Project />
      <Outlet />
    </div>
  );
};

export default ProjectWrapper;
