import React, { useMemo, memo, useEffect } from 'react';
import ProjectSidebar from './ProjectSidebar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AddProject from './components/AddProjectUi';
import { addProjectApi, selectActiveProjectId } from './store/projectsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import { selectProjectTabs } from './store/projectTabSlice';
import ProjectTabs from './ProjectTabs';
import history from '../../../utils/history';
import { styled } from '@mui/system';
//remove comment
// import { Navbar } from '@gessa/ui';
import generateRandomString from 'libs/ui/src/static/randomString';
import { selectProjectContentTree } from './store/projectContentTreeSlice';
import { selectAllConnectors } from './store/connectorSlice';
import { Context } from './components/Context';
import AddProjectUi from './components/AddProjectUi';
import CustomSnackbar from './components/CustomSnackbar';

const StyledDefaultTab = styled('div')(({ theme }) => {
  return {
    '.btn-tab': {
      backgroundColor: theme.palette.custom.form2,
      color: theme.palette.primary,
    },
    '.border': {
      borderColor: theme.palette.custom.form3,
    },
  };
});

const navbarData = {
  logo: {
    name: 'Calendar',
    size: 40,
    color: '#8a8a98',
    label: 'Calendar',
  },

  topActions: [
    {
      name: 'Menu-Dashboard',
      size: 30,
      color: '#8a8a98',
      label: 'Menu-Dashboard',
    },
    {
      name: 'Menu-Backend',
      size: 30,
      color: '#8a8a98',
      label: 'Menu-Backend',
    },
    {
      name: 'Menu-Devops2',
      size: 30,
      color: '#8a8a98',
      label: 'Menu-Devops2',
    },
    {
      name: 'Menu-Dataops',
      size: 30,
      color: '#8a8a98',
      label: 'Menu-Dataops',
    },
    {
      name: 'Menu-Microapps',
      size: 30,
      color: '#8a8a98',
      label: 'Menu-Microapps',
    },
    {
      name: 'Menu-Devops',
      size: 30,
      color: '#8a8a98',
      label: 'Menu-Devops',
    },
    {
      name: 'Menu-MiscSetting',
      size: 30,
      color: '#8a8a98',
      label: 'Menu-MiscSetting',
    },
  ],
  topActionActive: 2,
  bottomActions: [
    {
      name: 'User',
      size: 30,
      color: '#8a8a98',
      label: 'User',
    },
    {
      name: 'Settings',
      size: 30,
      color: '#8a8a98',
      label: 'Settings',
    },
  ],

  bottomActionActive: 1,
};

const Project = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const rootState = useSelector((state: IRootState) => state);
  const [open, setOpen]: any = React.useState(false);
  const [isOpenTab, setIsOpenTab]: any = React.useState(false);
  // const [isAddProject, setIsAddProject]: any = React.useState(false);
  const [showAddProject, setShowAddProject]: any = React.useState(true);
  const [showGetStarted, setShowGetStarted]: any = React.useState(true);
  const [openAddProject, setOpenAddProject]: any = React.useState(false);
  const [snackData, setSnackData]: any = React.useState({
    open: false,
    msg: '',
    duration: 6000,
    severity: 'info',
  });
  const activeProjectId = selectActiveProjectId(rootState);
  const pct = selectProjectContentTree(rootState);

  const handleClickOpen = () => {
    setOpen(true);
    alert('inside');
  };

  const handleClose = () => {
    setOpen(false);
    // setIsAddProject(false);
    setIsOpenTab(false);
    navigate('/project');
    setShowAddProject(false);
    return false;
  };

  // Fetch Project Tabs
  const projectsTabs = selectProjectTabs(rootState);

  // Add Project
  const addProject = (data: any) => {
    dispatch(addProjectApi(data));
    navigate('/project');
  };

  const isAddProject = useMemo(() => {
    return window.location.href.includes('add-project');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.href]);

  const [context, setContext]: any = React.useState('');

  const handleActionEvent = (data: any) => {
    navigate('/' + data.path);
  };

  const onHideSnackBar = React.useCallback(() => {
    setSnackData({
      msg: '',
      open: false,
      severity: 'info',
      duration: 6000,
    });
  }, []);

  return (
    <div className="flex" style={{ flexGrow: 1 }}>
      {/* <div key={generateRandomString()}></div> */}
      <Context.Provider value={[context, setContext]}>
        <ProjectSidebar
          openTab={(isOpenTab: any) => setIsOpenTab({ isOpenTab })}
          openAddProject={(openAddProject: any) => {
            navigate('project/add-project');
          }}
        />

        {isAddProject && (
          <AddProject addProject={addProject} setSnackData={setSnackData} />
        )}

        {projectsTabs &&
        // projectsTabs.length &&
        // projectsTabs.length > 0 &&
        !isAddProject ? (
          <div
            className="relative overflow-x-hidden overflow-y-hidden"
            style={{ flexGrow: 1 }}
          >
            <ProjectTabs />
          </div>
        ) : null}
      </Context.Provider>
      <CustomSnackbar
        msg={snackData.msg}
        open={snackData.open}
        onClose={onHideSnackBar}
        duration={snackData.duration}
        severity={snackData.severity}
      />
    </div>
  );
};
// export const DefaultTab = () => {
//   return <StyledDefaultTab className="p-3">default tab</StyledDefaultTab>;
// };

export default Project;
