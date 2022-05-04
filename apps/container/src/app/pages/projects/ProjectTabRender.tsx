import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../../store';
import DataFlow from '../data-flow/DataFlow';
import ProjectTabRendererUi from './components/ProjectTabRendererUi';
import ProjectTabsUi from './components/ProjectTabsUi';
import { getProjectContentTreeApi } from '../projects/store/projectContentTreeSlice';
import {
  setActiveProjectContentId,
  updateProjectContentTreeChildApi,
  updateProjectConnectorDetails,
} from './store/projectContentTreeSlice';
import {
  IRProjectTab,
  removeProjectTab,
  selectActiveProjectTabId,
  selectProjectTabById,
  selectProjectTabs,
  setActiveProjectTabId,
} from './store/projectTabSlice';
import { unstable_batchedUpdates } from 'react-dom';
import { getConnectorsApi, selectAllConnectors } from './store/connectorSlice';
import { Navigate, useNavigate } from 'react-router';

const ProjectTabRender = () => {
  const rootState = useSelector((state: IRootState) => state);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch Project Tabs
  const projectTabs = selectProjectTabs(rootState);

  // Fetch Active Project Tab
  const activeProjectTab = selectActiveProjectTabId(rootState);

  const tabDefinition = selectProjectTabById(rootState, activeProjectTab);
  const setActiveProjectTab = (tab: IRProjectTab) => {
    if (tab && tab.type) {
      switch (tab.type.toLowerCase()) {
        case 'connectors':
          navigate('/connector/edit-connector');
          break;
        case 'pipelines':
          navigate('/pipeline');
          break;
        case 'definition':
          navigate('/pipeline/' + tab.id + '/definition');
          break;
        case 'schedule':
          navigate('/pipeline/' + tab.id + '/schedule');
          break;
        case 'stats':
          navigate('/pipeline/' + tab.id + '/stats');
          break;
      }
    }

    dispatch(setActiveProjectTabId(tab.id));

    // Set Project Content as active
    dispatch(setActiveProjectContentId(tab.id));
  };

  // Close tab
  const closeTab = (tab: IRProjectTab) => {
    tab.id && dispatch(removeProjectTab(tab.id));
    // Set first tab as active if active tab closed
    if (tab.id === activeProjectTab) {
      dispatch(setActiveProjectTabId(projectTabs[0].id));
      dispatch(setActiveProjectContentId(projectTabs[0].id));
    }
  };

  const updateData = (formData: any, tabData: any) => {
    closeTab(formData.tabData);
    const connectorDetails = {
      name: formData.formData.data.name,
      connector_id: formData.tabData.id,
      project_id: formData.tabData.project_id,
      meta_connector_id: formData.formData.data.meta_connector_id,
      properties: [formData.formData.data.properties],
      is_delete: 0,
      type: formData.tabData.type,
    };

    // type: formData.formData.type,
    const payload = {
      content_tree_id: formData.tabData.project_content_id,
      child_id: formData.tabData.id,
      data: {
        name: formData.formData.data.name,
        type: formData.tabData.type,
        project_id: formData.tabData.project_id,
      },
    };

    dispatch(updateProjectContentTreeChildApi(payload));
    if (payload.data.type.toLowerCase() === 'connectors') {
      dispatch(
        getProjectContentTreeApi({ project_id: payload.data.project_id })
      );
    }

    dispatch(updateProjectConnectorDetails(connectorDetails));
    if (connectorDetails.type.toLowerCase() === 'connectors') {
      dispatch(
        getProjectContentTreeApi({ project_id: connectorDetails.project_id })
      );
    }
  };

  // Get Active Tab
  const getActiveProjectTab = (): IRProjectTab =>
    projectTabs.filter((tab) => tab.id === activeProjectTab)[0];
  const [newprojectTabs, setProjectTabs]: any = React.useState([]);
  const [newSelectedTab, setSelectedTab] = React.useState('');
  const firstRender = React.useRef(true);

  React.useEffect(() => {
    unstable_batchedUpdates(() => {
      if (projectTabs.length === 0 && firstRender.current) {
        setProjectTabs([
          {
            id: '123',
            name: 'Get Started',
            project_content_id: '',
            project_id: '',
            type: 'getStarted',
          },
        ]);
        setSelectedTab('123');
      } else {
        firstRender.current = false;
        setProjectTabs(projectTabs);
        setSelectedTab(projectTabs.length ? activeProjectTab : '');
      }
    });
  }, [projectTabs, activeProjectTab]);

  const connectorAllType = selectAllConnectors(rootState);
  const validateForm = (data: any) => {
    console.log('data maybe ', data);
  };

  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{ width: 'calc(100vw - 250px)' }}
    >
      <ProjectTabRendererUi
        tab={tabDefinition}
        closeTab={updateData}
        connectorAllType={connectorAllType}
        isValidate={true}
        validateForm={validateForm}
      />
    </div>
  );
};

export default ProjectTabRender;
