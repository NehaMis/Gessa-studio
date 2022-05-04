import { NavLink } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
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
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { addNewProject } from 'apps/container2/src/store/projectData';
import Typography from '@mui/material/Typography';
/* eslint-disable-next-line */
export interface Navbar2Props {}

function MinusSquare(props: any) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props: any) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props: any) {
  return (
    <SvgIcon
      className="close"
      fontSize="inherit"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

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
//   /**
//    * Show the component; triggers the enter or exit states
//    */
//   in: PropTypes.bool,
// };

const getProjects = async () => {
  const response = await axios.get('/api/projects');
  const data = await response.data;
  return data;
};

const addNewProjectApi = async (currentProject: any) => {
  const response = await axios.post('/api/project', {
    params: currentProject,
  });
  const data = await response.data;
  return data;
};

const addNewProjectTree = async (currentProject: any) => {
  const response = await axios.post('/api/project-tree', {
    params: currentProject,
  });
  const data = await response.data;
  return data;
};

const getProjectTree = async (currentProject: any) => {
  const response = await axios.get('/api/project-tree', {
    params: { id: currentProject.id },
  });
  const data = await response.data;
  return data;
};

export function Navbar2(props: Navbar2Props) {
  const navigate = useNavigate();
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

  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({ id: 1 });
  const [projectTree, setProjectTree] = useState({ project_id: -1, tree: [] });

  const theme = useTheme();
  const tempFormData = useSelector((state: any) => state.project);
  const handleProjectChange = (event: any) => {
    if (event.target.value !== '0') {
      setCurrentProject(
        projects[projects.findIndex((e: any) => e.id === event.target.value)]
      );
    } else {
      addNewProjects();
    }
  };

  const addNewProjects = () => {
    dispatch(
      addTab({
        id: 'addProject',
        title: 'Add Project',
        data: [
          {
            key: 'addProject',
            value: [
              {
                title: '',
                form: [
                  {
                    type: 'text',
                    value: [''],
                    label: 'Name',
                    name: 'name',
                    placeholder: 'Enter Name',
                    options: [],
                    required: true,
                    validation: {
                      name: 'name',
                      required: true,
                      errorMessage: 'Name is required',
                      min: 0,
                      max: 0,
                    },
                  },

                  {
                    type: 'text',
                    value: [''],
                    label: 'Tags',
                    name: 'tags',
                    placeholder: 'Enter Tags',
                    options: [],
                    required: true,
                    validation: {
                      name: 'tags',
                      required: true,
                      errorMessage: 'Tags required',
                      min: 0,
                      max: 0,
                    },
                  },
                  {
                    type: 'textarea',
                    value: [''],
                    label: 'Description',
                    name: 'description',
                    placeholder: 'Enter Description',
                    options: [],
                    required: true,
                    validation: {
                      name: 'description',
                      required: true,
                      errorMessage: 'Description required',
                      min: 0,
                      max: 0,
                    },
                  },
                ],
              },
            ],
          },
        ],
      })
    );
    // const payload = {
    //   id: Math.random().toString(),
    //   name: 'newProject',
    //   children: [],
    // };
    // addNewProjectApi(payload).then((res) => {
    //   getProjects().then((res) => {
    //     res.push({ id: '0', name: 'Add Project' });
    //     setProjects(res);
    //     setCurrentProject(res[0]);
    //   });
    // });

    navigate('/projects/end-points/add-project');
  };
  const handleTreeItemClick = (treeItem: any) => {
    // Leaf node check
    if (!treeItem.children || treeItem.children.length === 0) {
      if (window.location.href.indexOf('data-flow') !== -1) {
        dispatch(
          addTab({
            id: treeItem.id,
            title: treeItem.name,
            data: [
              {
                key: 'input1',
                value: `This is input box in ${treeItem.name}`,
              },
            ],
          })
        );
      } else if (window.location.href.indexOf('end-points') !== -1) {
        dispatch(
          endpointAddTab({
            id: treeItem.id,
            title: treeItem.name,
            data: [
              {
                key: 'definition',
                value: [
                  {
                    id: '1',
                    type: 'info', // input node
                    data: {
                      component: 'GessaCard1',
                      props: {
                        icon: {
                          name: 'Menu-Info',
                          size: 30,
                          color: '#ffffff',
                          label: 'Menu-Info',
                        },
                        leftAccent: '',
                        text: '',
                      },
                    },
                    position: { x: 100, y: 365 },
                    AssociatedForm: [
                      {
                        type: 'text',
                        value: ['ep infor'],
                        name: 'userName',
                        label: 'Name',
                        placeholder: 'Enter Name',
                        options: [],
                        required: true,
                        validation: [],
                      },
                      {
                        type: 'select',
                        name: 'connectorName',
                        value: ['connector4'],
                        label: 'Connector Name',
                        placeholder: 'Select Connector',
                        options: [
                          { value: 'connector1', label: 'connector1' },
                          { value: 'connector2', label: 'connector2' },
                          { value: 'connector3', label: 'connector3' },
                          { value: 'connector4', label: 'connector4' },
                        ],
                        required: true,
                        validation: [],
                      },
                      {
                        type: 'select',
                        name: 'connectorType',
                        value: ['input'],
                        label: 'Connector Type',
                        placeholder: 'Select Connector Type ',
                        options: [
                          { value: 'input', label: 'input' },
                          { value: 'store', label: 'store' },
                        ],
                        required: true,
                        validation: [],
                      },
                      {
                        type: 'text',
                        value: ['endpoint dataframe name'],
                        label: 'Data Frame Name',
                        name: 'dataFrameName',
                        placeholder: 'Enter Frame Name',
                        options: [],
                        required: true,
                        validation: [],
                      },
                    ],
                  },
                  {
                    id: '2',
                    type: 'input', // input node
                    data: {
                      component: 'GessaCard1',
                      props: {
                        icon: {
                          name: 'Menu-Mysql',
                          size: 30,
                          color: '#ffffff',
                          label: 'Masa',
                        },
                        leftAccent: '',
                        text: '',
                      },
                    },
                    position: { x: 100, y: 365 },
                    AssociatedForm: [
                      {
                        type: 'text',
                        value: ['uname 123'],
                        name: 'userName',
                        label: 'Name',
                        placeholder: 'Enter Name',
                        options: [],
                        required: true,
                        validation: {
                          name: 'userName',
                          required: true,
                          errorMessage: 'Name is required',
                          min: 0,
                          max: 0,
                        },
                      },
                      {
                        type: 'select',
                        name: 'connectorName',
                        value: ['connector4'],
                        label: 'Connector Name',
                        placeholder: 'Select Connector',
                        options: [
                          { value: 'connector1', label: 'connector1' },
                          { value: 'connector2', label: 'connector2' },
                          { value: 'connector3', label: 'connector3' },
                          { value: 'connector4', label: 'connector4' },
                        ],
                        required: true,
                        validation: {
                          name: 'connectorName',
                          required: true,
                          errorMessage: 'Connector name is required',
                          min: 0,
                          max: 0,
                        },
                      },
                      {
                        type: 'select',
                        name: 'connectorType',
                        value: ['input'],
                        label: 'Connector Type',
                        placeholder: 'Select Connector Type ',
                        options: [
                          { value: 'input', label: 'input' },
                          { value: 'store', label: 'store' },
                        ],
                        required: true,
                        validation: {
                          name: 'connectorType',
                          required: true,
                          errorMessage: 'connector type is required',
                          min: 0,
                          max: 0,
                        },
                      },
                      {
                        type: 'text',
                        value: ['endpoint dataframe name'],
                        label: 'Data Frame Name',
                        name: 'dataFrameName',
                        placeholder: 'Enter Frame Name',
                        options: [],
                        required: true,
                        validation: {
                          name: 'dataFrameName',
                          required: true,
                          errorMessage: 'data frame name is required',
                          min: 0,
                          max: 0,
                        },
                      },
                    ],
                    vaidationSchema: [],
                  },
                  {
                    id: '3',
                    type: 'store', // input node
                    data: {
                      component: 'GessaCard1',
                      props: {
                        icon: {
                          name: 'Menu-Postgres',
                          size: 30,
                          color: '#ffffff',
                          label: 'Hatti',
                        },
                        leftAccent: '',
                        text: '',
                      },
                    },
                    position: { x: 150, y: 400 },
                    AssociatedForm: [
                      {
                        type: 'text',
                        value: ['endpoint username55'],
                        name: 'userName',
                        label: 'Name',
                        placeholder: 'Enter Name',
                        options: [],
                        required: true,
                        validation: {
                          name: 'userName',
                          required: true,
                          errorMessage: 'Name is required',
                          min: 0,
                          max: 0,
                        },
                      },
                      {
                        type: 'select',
                        name: 'connectorName',
                        value: ['connector4'],
                        label: 'Connector Name',
                        placeholder: 'Select Connector',
                        options: [
                          { value: 'connector1', label: 'connector1' },
                          { value: 'connector2', label: 'connector2' },
                          { value: 'connector3', label: 'connector3' },
                          { value: 'connector4', label: 'connector4' },
                        ],
                        required: true,
                        validation: {
                          name: 'connectorName',
                          required: true,
                          errorMessage: 'Connector name is required',
                          min: 0,
                          max: 0,
                        },
                      },
                      {
                        type: 'select',
                        name: 'connectorType',
                        value: ['store'],
                        label: 'Connector Type',
                        placeholder: 'Select Connector Type ',
                        options: [
                          { value: 'input', label: 'input' },
                          { value: 'store', label: 'store' },
                        ],
                        required: true,
                        validation: {
                          name: 'connectorType',
                          required: true,
                          errorMessage: 'connector type is required',
                          min: 0,
                          max: 0,
                        },
                      },
                      {
                        type: 'multiselect',
                        name: 'chooseDataFrame',
                        value: ['input1'],
                        label: 'Choose Data Frame multi',
                        placeholder: 'Choose data frames ',
                        options: [
                          { value: 'input1', label: 'input1' },
                          { value: 'store1', label: 'store1' },
                        ],
                        validation: {
                          name: 'chooseDataFrame',
                          required: true,
                          errorMessage: 'data frame is required',
                          min: 0,
                          max: 0,
                        },
                      },
                      {
                        type: 'text',
                        value: ['endpoint dataframe name'],
                        label: 'Data Frame Name',
                        name: 'dataFrameName',
                        placeholder: 'Enter Frame Name',
                        options: [],
                        required: true,
                        validation: {
                          name: 'dataFrameName',
                          required: true,
                          errorMessage: 'Data frame  is required',
                          min: 0,
                          max: 0,
                        },
                      },
                    ],
                  },
                  {
                    id: '4', // input node
                    data: {
                      component: 'GessaCard1',
                      props: {
                        icon: {
                          name: 'Menu-Transform',
                          size: 30,
                          color: '#ffffff',
                          label: 'Menu-Transform',
                        },
                        leftAccent: '',
                        text: '',
                      },
                    },
                    position: { x: 150, y: 400 },
                    AssociatedForm: [
                      {
                        type: 'text',
                        value: ['endpoint username55'],
                        name: 'userName',
                        label: 'Name',
                        placeholder: 'Enter Name',
                        options: [],
                        required: true,
                        validation: [],
                      },
                      {
                        type: 'select',
                        name: 'connectorName',
                        value: ['connector4'],
                        label: 'Connector Name',
                        placeholder: 'Select Connector',
                        options: [
                          { value: 'connector1', label: 'connector1' },
                          { value: 'connector2', label: 'connector2' },
                          { value: 'connector3', label: 'connector3' },
                          { value: 'connector4', label: 'connector4' },
                        ],
                        required: true,
                        validation: [],
                      },
                      {
                        type: 'select',
                        name: 'connectorType',
                        value: ['store'],
                        label: 'Connector Type',
                        placeholder: 'Select Connector Type ',
                        options: [
                          { value: 'input', label: 'input' },
                          { value: 'store', label: 'store' },
                        ],
                        required: true,
                        validation: [],
                      },
                      {
                        type: 'text',
                        value: ['endpoint dataframe name'],
                        label: 'Data Frame Name',
                        name: 'dataFrameName',
                        placeholder: 'Enter Frame Name',
                        options: [],
                        required: true,
                        validation: [],
                      },
                    ],
                  },
                  {
                    id: '5',
                    type: 'store', // input node
                    data: {
                      component: 'GessaCard1',
                      props: {
                        icon: {
                          name: 'Menu-RabbitMQ',
                          size: 30,
                          color: '#ffffff',
                          label: 'Menu-RabbitMQ',
                        },
                        leftAccent: '',
                        text: '',
                      },
                    },
                    position: { x: 150, y: 400 },
                    AssociatedForm: [
                      {
                        type: 'text',
                        value: ['endpoint username55'],
                        name: 'userName',
                        label: 'Name',
                        placeholder: 'Enter Name',
                        options: [],
                        required: true,
                        validation: [],
                      },
                      {
                        type: 'select',
                        name: 'connectorName',
                        value: ['connector4'],
                        label: 'Connector Name',
                        placeholder: 'Select Connector',
                        options: [
                          { value: 'connector1', label: 'connector1' },
                          { value: 'connector2', label: 'connector2' },
                          { value: 'connector3', label: 'connector3' },
                          { value: 'connector4', label: 'connector4' },
                        ],
                        required: true,
                        validation: [],
                      },
                      {
                        type: 'select',
                        name: 'connectorType',
                        value: ['store'],
                        label: 'Connector Type',
                        placeholder: 'Select Connector Type ',
                        options: [
                          { value: 'input', label: 'input' },
                          { value: 'store', label: 'store' },
                        ],
                        required: true,
                        validation: [],
                      },
                      {
                        type: 'text',
                        value: ['endpoint dataframe name'],
                        label: 'Data Frame Name',
                        name: 'dataFrameName',
                        placeholder: 'Enter Frame Name',
                        options: [],
                        required: true,
                        validation: [],
                      },
                    ],
                  },
                ],
              },
              {
                key: 'chart',
                value: [],
              },
            ],
          })
        );
        switch (treeItem.name.toLowerCase()) {
          case 'connectors':
            navigate('/projects/end-points/add-connector');

            break;
          case 'pipeline':
            navigate('/projects/end-points/add-pipeline');

            break;
          default:
            navigate('/projects/end-points/add-project');

            break;
        }
        // navigate('/projects/end-points');
      }
    }
  };

  useEffect(() => {
    getProjects().then((res) => {
      res.push({ id: '0', name: 'Add Project' });
      setProjects(res);
      setCurrentProject(res[0]);
    });
  }, []);

  useEffect(() => {
    getProjectTree(currentProject).then((res) => {
      setProjectTree(res);
    });
  }, [currentProject]);

  useEffect(() => {
    const newData = JSON.parse(JSON.stringify(tempFormData));
    if (newData.tempData.length) {
      const index = newData.tempData[0].findIndex(
        (value: any) => value.key === 'tempForm'
      );

      if (index !== -1) {
        const payload = newData.tempData[0][index].value[0];
        addNewProjectApi(payload).then((res) => {
          getProjects().then((res) => {
            res.push({ id: '0', name: 'Add Project' });
            setProjects(res);
            setCurrentProject(res[0]);
          });
        });
        const projectTree = [
          {
            project_id: newData.tempData[0][index].value[0].id,
            tree: [
              {
                id: Math.random().toString(),
                name: 'Connectors',
                children: [],
              },
              {
                id: Math.random().toString(),
                name: 'Pipeline',
                children: [
                  {
                    id: Math.random().toString(),
                    name: 'Pipeline 1',
                    children: [],
                  },
                ],
              },
            ],
          },
        ];
        addNewProjectTree(projectTree).then((res) => {
          getProjects().then((res) => {
            res.push({ id: '0', name: 'Add Project' });
            setProjects(res);
            setCurrentProject(res[0]);
            getProjectTree(currentProject).then((res) => {
              setProjectTree(res);
            });
          });
        });
        // newData.tempData[0][index].value = [];
        // dispatch(addNewProject(newData));
      }
    }
  }, [dispatch, tempFormData]);

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
            {/* <MenuItem key={Math.random().toString()} value={'addProject'}>
              Add Project
            </MenuItem> */}
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
