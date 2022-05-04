import { NavLink } from 'react-router-dom';
import { useContext, useState, useEffect, useCallback } from 'react';
import RoutesContext from '../../../context/routes';
import { Collapse, Paper, SvgIcon } from '@mui/material';
import { TreeItem, treeItemClasses, TreeView } from '@mui/lab';
import { useSpring } from '@react-spring/core';
import { animated } from 'react-spring';
import { alpha, styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/system';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import axios from 'axios';
import { addTab } from '../../../store/tabsStore';
import { endpointAddTab } from '../../../store/endpointStore';
import { useNavigate } from 'react-router-dom';
import { Children } from 'hoist-non-react-statics/node_modules/@types/react';
import { FakeApiService } from './../../../services/fakeApiService';
import { ConstructionRounded } from '@mui/icons-material';

import { EndPointsUrl } from '../../../fake-api/api/endpointUrl';
import Typography from '@mui/material/Typography';
/* eslint-disable-next-line */
export interface Navbar2Props {}

function TransitionComponent(props: any) {
  const style = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(20px,0,0)',
    },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

// TransitionComponent.propTypes = {
//   in: PropTypes.bool,
// };

export function Navbar2(props: Navbar2Props) {
  // let fakeApiService: FakeApiService;

  // apiService.callGetApi(EndPointsUrl.projects, {});

  const StyledTreeItem = styled((props: any) => (
    <TreeItem
      {...props}
      TransitionComponent={TransitionComponent}
      onClick={() => handleTreeItemClick(props.treeitem)}
    >
      {props.children &&
        props.children.length > 0 &&
        props.children.map((treeItem: any) => (
          <StyledTreeItem
            key={treeItem.id}
            nodeId={treeItem.id}
            label={treeItem.name}
            treeitem={treeItem}
            children={treeItem.children}
          />
        ))}
    </TreeItem>
  ))(({ theme }) => ({
    [`& .${treeItemClasses.iconContainer}`]: {
      '& .close': {
        opacity: 0.3,
      },
    },
    [`& .${treeItemClasses.group}`]: {
      marginLeft: 15,
      paddingLeft: 18,
      borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
    },
  }));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [projects, setProjects] = useState<any>([]);
  const [currentProject, setCurrentProject] = useState({ id: 1 });
  const [projectTree, setProjectTree] = useState<any>({
    project_id: -1,
    tree: [],
  });
  const tempFormData = useSelector((state: any) => state.project);

  const handleProjectChange = (event: any) => {
    if (event.target.value !== 'addproject') {
      setCurrentProject(
        projects[projects.findIndex((e: any) => e.id === event.target.value)]
      );
    } else {
      navigate('/projects/end-points/add-project');
    }
  };

  const handleTreeItemClick = (treeItem: any) => {
    // Leaf node check

    switch (treeItem.name.toLowerCase()) {
      case 'connectors':
        navigate('/projects/end-points/add-connector');
        break;
      case 'pipelines':
        navigate('/projects/end-points/add-pipeline');
        break;
      case 'default':
        navigate('/projects/end-points/');
        break;
    }
  };

  const fetchMyAPI = useCallback(async () => {
    let response: any = await fetch(
      process.env.NX_BASE_URL + `/projects?page=0&size=10`
    );
    response = await response.json();
    const projArr = [];
    if (response && response.result && response.result.data) {
      for (let i = 0; i < response.result.data.length; i += 1) {
        const payload = {
          id: response.result.data[i]._id,
          name: response.result.data[i].name,
        };
        projArr.push(payload);
      }
      const addProjectPayload = {
        id: 'addproject',
        name: 'Add Project',
      };
      projArr.push(addProjectPayload);
      setProjects(projArr);
      setCurrentProject({ id: response.result.data[0]._id });
    }
  }, []);

  const fetchCurrentTree = useCallback(async () => {
    const currProjId = '61a5f3c524517c01e401d1ff';
    let response: any = await fetch(
      'https://ops.iauro.co/gessa-projectservice--development/project-content-tree'
    );
    response = await response.json();
    const projectTree = response.result.data.filter(
      (value: any) => value.project_id === currProjId
    );
    if (projectTree && projectTree.length) {
      const tree = [];
      for (let i = 0; i < projectTree.length; i += 1) {
        const payload = {
          id: projectTree[i]._id,
          name: projectTree[i].name,
          children: projectTree[i].children,
        };

        tree.push(payload);
      }
      const finObj = {
        project_id: currProjId,
        tree: tree,
      };
      setProjectTree(finObj);
    }
  }, []);

  const addItemToProjectTree = useCallback(async (data: any) => {
    const currProjId = '61a5f3c524517c01e401d1ff';
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(data),
    };
    let response: any = await fetch(
      'https://ops.iauro.co/gessa-projectservice--development/project-content-tree',
      requestOptions
    );
    response = await response.json();
  }, []);

  useEffect(() => {
    if (tempFormData && tempFormData.tempData.length) {
      const index = tempFormData.tempData.findIndex(
        (value: any) => value.key === 'tempForm'
      );

      if (index !== -1) {
        // let formIndex = tempFormData.tempData[index].value
        const temp = tempFormData.tempData[index].value[0];

        const payload = {
          name: temp.name,
          type: temp.type,
          icon: 'string',
          project_id: '61a5f3c524517c01e401d1ff',
          project_content_id: 'string',
          child_allowed: 0,
          is_delete: 0,
        };

        if (payload) {
          addItemToProjectTree(payload);
        }
      }
    }
  }, [tempFormData, dispatch]);

  useEffect(() => {
    fetchMyAPI().then((response: any) => {
      fetchCurrentTree();
    });
  }, [fetchMyAPI]);

  useEffect(() => {
    fetchCurrentTree();
  }, [currentProject]);

  return (
    <div className="top-2 w-60 p-2 pt-4">
      {projects.length > 0 && (
        <FormControl fullWidth className="mb-8">
          <InputLabel id="demo-simple-select-label">Projects</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currentProject.id}
            label="Projects"
            onChange={handleProjectChange}
          >
            {projects.map((project: any) => (
              <MenuItem key={project.id} value={project.id}>
                {project.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}

      {projectTree.tree &&
      projectTree.tree.length &&
      projectTree.tree.length > 0 ? (
        <TreeView
          aria-label="customized"
          defaultExpanded={['1']}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{
            height: 264,
            flexGrow: 1,
            maxWidth: 400,
            overflow: 'hidden',
          }}
        >
          {projectTree.tree.map((treeItem: any) => (
            <StyledTreeItem
              key={treeItem.id}
              nodeId={treeItem.id}
              label={treeItem.name}
              children={treeItem.children}
              treeitem={treeItem}
            />
          ))}
        </TreeView>
      ) : (
        <Typography variant="body1">No data available</Typography>
      )}
    </div>
  );
}

export default Navbar2;
