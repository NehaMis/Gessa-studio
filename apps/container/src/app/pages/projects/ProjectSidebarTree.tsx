import { useEffect } from 'react';
import { IRootState } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProjectContentTreeChildApi,
  selectActiveProjectContentId,
  getProjectContentTreeApi,
  IRProjectContentTreeItem,
  selectProjectContentTree,
  setActiveProjectContentId,
} from './store/projectContentTreeSlice';
import { Typography } from '@mui/material';
import SidebarTreeUi from './components/SidebarTreeUi';
import {
  setActiveProjectTabId,
  upsertProjectTab,
} from './store/projectTabSlice';
import { getConnectorsApi } from './store/connectorSlice';
import { useNavigate } from 'react-router';

interface Props {
  activeProjectId: string;
  openTab: any;
}

const ProjectSidebarTree = ({ openTab, activeProjectId }: Props) => {
  const rootState = useSelector((state: IRootState) => state);
  const dispatch = useDispatch();
  // Fetch Project Content Tree
  const projectContentTree = selectProjectContentTree(rootState);
  const navigate = useNavigate();
  const setActiveProjectContent = (
    project_tree_item: IRProjectContentTreeItem,
    is_leaf_node: boolean,
    level: number
  ) => {
    switch (project_tree_item.type.toLowerCase()) {
      case 'connectors':
        navigate('/connector/edit-connector');
        break;
      case 'pipelines':
        navigate('/pipeline');
        break;
      case 'definition':
        navigate('/pipeline/' + project_tree_item._id + '/definition');
        break;
      case 'schedule':
        navigate(project_tree_item._id + '/schedule');
        break;
      case 'stats':
        navigate(project_tree_item._id + '/stats');
        break;
    }

    dispatch(setActiveProjectContentId(project_tree_item._id));

    // Add tab if leaf node and leaf node not equal to root node
    if (is_leaf_node && level !== 0) {
      dispatch(
        upsertProjectTab({
          id: project_tree_item._id,
          name: project_tree_item.name,
          type: project_tree_item.type,
          project_id: project_tree_item.project_id,
          project_content_id: project_tree_item.project_content_id,
        })
      );

      // Set tab as active
      dispatch(setActiveProjectTabId(project_tree_item._id));
    }
  };

  // Fetch Active Project Content Id
  const activeProjectContentId = selectActiveProjectContentId(rootState);

  // Add Project Content Tree item
  const addContentTreeItem = (data: any) => {
    const params = {
      content_tree_id: data._id,
      payload: {
        // parent_id: data._id,
        project_id: data.project_id,
        name: data.contentName,
        type: data.type,
        category: data.type,
        child_allowed: 1,
      },
    };
    dispatch(addProjectContentTreeChildApi(params));
  };

  useEffect(() => {
    dispatch(getProjectContentTreeApi({ project_id: activeProjectId }));
    dispatch(getConnectorsApi({ page: 0, size: 10 }));
  }, [activeProjectId, dispatch]);

  return (
    <SidebarTreeUi
      openTab={openTab}
      projectContentTree={projectContentTree}
      activeProjectContentId={activeProjectContentId}
      setActiveProjectContent={setActiveProjectContent}
      addContentTreeItem={addContentTreeItem}
    />
  );
};

export default ProjectSidebarTree;
