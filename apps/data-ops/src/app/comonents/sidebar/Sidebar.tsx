import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProjects,
  IProject,
  selectProjects,
} from '../../../store/projectsSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const projects = useSelector(selectProjects);

  return (
    <>
      <Typography variant="h2" component="h2">
        Sidebar
      </Typography>
      {projects.map((project: IProject) => (
        <Typography key={project.id} variant="body1">
          {project.name}
        </Typography>
      ))}
    </>
  );
};

export default Sidebar;
