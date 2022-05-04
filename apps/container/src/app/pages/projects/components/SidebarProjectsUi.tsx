/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IRProject } from '../store/projectsSlice';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import OutlinedInput from '@mui/material/OutlinedInput';
import { IconComponent } from '@gessa/ui';
import { useNavigate } from 'react-router';

interface IDataFlowSidebarProjects {
  projects: IRProject[];
  activeProjectId: string;
  openAddProject: any;
  setActiveProject: (_id: string) => void;
}

const StyledDropdown = styled('div')(({ theme }) => {
  return {
    '.dropdown': {
      backgroundColor: theme.palette.custom.selectedText,
      color: theme.palette.primary,
    },
    '.add-project': {
      backgroundColor: 'red',
    },
    '.selected-option': {
      backgroundColor: theme.palette.custom.selectedText,
    },
  };
});
const SidebarProjects = ({
  projects,
  activeProjectId,
  setActiveProject,
  openAddProject,
}: IDataFlowSidebarProjects) => {
  const [selectedProject, setSelectedProject] = useState('');
  const [projectList, setProjectList] = useState(projects);
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedProject(event.target.value || '');
    setActiveProject(event.target.value || '');
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (activeProjectId === null) {
      navigate('/project');
    }
    if (projectList.length && projectList.length !== projects.length) {
      projects.forEach((thatData) => {
        let found = false;
        projectList.forEach((thisData) => {
          if (thatData._id === thisData._id) {
            found = true;
          }
        });

        if (!found && thatData._id) {
          setSelectedProject(thatData._id || '');
          setActiveProject(thatData._id || '');
        }
      });
    }
    setProjectList(projects || []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects]);
  
  return (
    <StyledDropdown style={{ width: '100%' }}>
      <FormControl className="h-100" style={{ width: '100%' }}>
        <InputLabel className="mx-4 text-xs">
          {selectedProject === '' ? 'Select Project' : ''}
        </InputLabel>
        <Select
          className="w-100 mx-5 mt-2 h-8 dropdown"
          value={selectedProject}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <Link
            className={`flex p-3 space-x-3 hover:bg-gray-900`}
            to="/project/add-project"
          >
            <IconComponent
              name={'Vector'}
              color={'white'}
              size={20}
              label={'Add'}
            />
            <div>Add Project</div>
            {/* <div onClick={() => openAddProject(true)}>Add Project</div> */}
          </Link>

          {projects.map((project: IRProject) => (
            <MenuItem
              className={`cursor-pointer  w-60 ${
                project._id === activeProjectId ? 'selected-option' : null
              }`}
              // onClick={() => setActiveProject(project._id)}
              key={project._id}
              value={project._id}
              id={project._id}
            >
              {project.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledDropdown>
  );
};

export default SidebarProjects;
