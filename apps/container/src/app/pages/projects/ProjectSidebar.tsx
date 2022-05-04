import { useContext, useEffect } from 'react';
import { IRootState } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectActiveProjectId,
  getProjectsApi,
  selectProjects,
  setActiveProjectId,
} from './store/projectsSlice';
import { AuthContext } from '../../../context';
import SidebarProjects from './components/SidebarProjectsUi';
import { setActiveProjectContentId } from './store/projectContentTreeSlice';
import ProjectSidebarTree from './ProjectSidebarTree';
import { setGettingStartedProjectTab } from './store/projectTabSlice';
import { styled } from '@mui/system';
import { selectAllConnectors } from './store/connectorSlice';

const StyledSidebar = styled('div')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.primary,
    },
  };
});

const ProjectSidebar = ({ openAddProject, openTab }: any) => {
  const rootState = useSelector((state: IRootState) => state);
  const { auth } = useContext(AuthContext) as AuthContextType;
  const dispatch = useDispatch();

  // Fetch Project Ids
  const projects = selectProjects(rootState);

  // Fetch Active Project Id
  const activeProjectId = selectActiveProjectId(rootState);
  const setActiveProject = (id: string) => {
    dispatch(setActiveProjectContentId(null));
    dispatch(setActiveProjectId(id));
    // dispatch(removeAllProjectTabs());
    // dispatch(setActiveProjectTabId(null));
    dispatch(setGettingStartedProjectTab());
  };
  const temp = selectAllConnectors(rootState);
  // Fetch Projects
  useEffect(() => {
    // dispatch(updateTestConnection(auth));
    dispatch(getProjectsApi(auth));
  }, [auth, dispatch]);

  return (
    <div className="w-64 h-screen overflow-y-hidden overflow-x-hidden css-kahbyc">
      <StyledSidebar className="w-100 h-100">
        <SidebarProjects
          openAddProject={openAddProject}
          projects={projects}
          activeProjectId={activeProjectId}
          setActiveProject={setActiveProject}
        />
        <div className="h-screen overflow-y-auto">
          {activeProjectId && (
            <ProjectSidebarTree
              openTab={openTab}
              activeProjectId={activeProjectId}
            />
          )}
        </div>
      </StyledSidebar>
    </div>
  );
};

export default ProjectSidebar;
