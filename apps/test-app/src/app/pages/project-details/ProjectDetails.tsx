// Libraries
import { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router';

// Fake DB
import { axiosAPI } from '../../../fake-db/mock';
import { IWorker } from '../../../fake-db/db/worker-db';

// Store
import { IRootState } from '../../../store';
import { getWorker } from '../../../store/workerSlice';
import {
  getProjects,
  selectProjectById,
  selectProjectIds,
  IProjectFormatted,
} from '../../../store/projectsSlice';

// Hooks
import useWindowSize from '../../hooks/useWindowSize';

// Context
import { AuthContext } from '../../../context';

// Components
import Header from '../../components/header/Header';
import { ProjectDetailsUi } from '../../components/project-details/ProjectDetailsUi';
import ProjectDetailsDrawer from '../../components/project-details/ProjectDetailsDrawer';
import ProjectDetailsDialog from '../../components/project-details/ProjectDetailsDialog';
import NoMoreProjects from '../../components/no-more-projects/NoMoreProjects';

const ProjectDetails = () => {
  const { auth } = useContext(AuthContext) as AuthContextType;
  const rootState = useSelector((state: IRootState) => state);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [width] = useWindowSize();
  const [infoWindow, setInfoWindow] = useState({
    text: '',
    visible: false,
    mode: 'mobile',
  });

  const acceptProject = (userId: string, projectId: string) => {
    respondToProject(userId, projectId, true);
  };

  const rejectProject = (userId: string, projectId: string) => {
    respondToProject(userId, projectId, false);
  };

  const respondToProject = (
    userId: string,
    projectId: string,
    accepted: boolean
  ) => {
    const [endpoint, message] = accepted
      ? ['accept', 'accepted']
      : ['reject', 'rejected'];
    axiosAPI
      .get(
        `https://test.testapp.com/api/worker/${userId}/project/${projectId}/${endpoint}`
      )
      .then((res) => {
        if (res.data.message) {
          setInfoWindow({
            text: res.data.message,
            mode: infoWindow.mode,
            visible: true,
          });
        } else {
          setInfoWindow({
            text: `Project has been ${message}`,
            mode: infoWindow.mode,
            visible: true,
          });
        }
      });
  };

  const loadNextProject = () => {
    setInfoWindow({
      text: '',
      mode: infoWindow.mode,
      visible: false,
    });

    setActiveProjectIndex(activeProjectIndex + 1);
  };

  // Fetch worker
  const worker = useSelector((state: IRootState) => state.worker.data);
  const workerCast: IWorker = worker as IWorker;

  // Fetch Project Ids
  const projectIds = selectProjectIds(rootState);

  // Fetch Active Project
  const activeProject = selectProjectById(
    rootState,
    projectIds[activeProjectIndex]
  );
  const activeProjectCast: IProjectFormatted =
    activeProject as IProjectFormatted;

  // Load data from APIs
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorker(auth));
    dispatch(getProjects(auth));
  }, [auth, dispatch]);

  // Listen to window width changes
  useEffect(() => {
    const mode = width > 768 ? 'desktop' : 'mobile';
    if (mode === infoWindow.mode) {
      return;
    }

    // Use snackbar or dialog based on screen resolution
    setInfoWindow({
      ...infoWindow,
      mode,
    });
  }, [width, infoWindow]);

  return (
    <>
      <div className="flex">
        <Header user={worker} />

        {activeProjectIndex > 0 && !activeProject?.projectId ? (
          <NoMoreProjects />
        ) : (
          <ProjectDetailsUi
            user={workerCast}
            project={activeProjectCast}
            onAccept={acceptProject}
            onReject={rejectProject}
          />
        )}

        <ProjectDetailsDrawer
          infoWindow={infoWindow}
          setInfoWindow={setInfoWindow}
          loadNextProject={loadNextProject}
        />
      </div>

      <ProjectDetailsDialog
        infoWindow={infoWindow}
        setInfoWindow={setInfoWindow}
        loadNextProject={loadNextProject}
      />
    </>
  );
};

const ProjectDetailsGuard = () => {
  const { auth } = useContext(AuthContext) as AuthContextType;

  // Navigate to Login page if not logged in
  if (!auth.isLoggedIn) {
    return <Navigate to="/login" />;
  } else {
    return <ProjectDetails />;
  }
};

export default ProjectDetailsGuard;
