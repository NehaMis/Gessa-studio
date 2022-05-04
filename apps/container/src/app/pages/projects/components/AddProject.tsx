import React, { useMemo, memo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addProjectApi } from '../store/projectsSlice';
import AddProjectUi from './AddProjectUi';

interface AddProjectProps {}

const AddProject = (props: AddProjectProps) => {
  const [isAddProject, setIsAddProject]: any = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  setIsAddProject(false);

  const addProject = (data: any) => {
    dispatch(addProjectApi(data));
    navigate('/project');
  };

  return (
    <div>Add projet rendered</div>
    // <AddProjectUi addProject={addProject} />
  );
};

export default memo(AddProject);
