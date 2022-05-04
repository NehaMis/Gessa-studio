import React, { useEffect, useState, useCallback, useContext } from 'react';
import {
  IChartData,
  IDataFlowNode,
  IDataFlowPayload,
  IDataFlowUpdateApi,
  IFlowchart,
  Property,
} from 'apps/flow-chart-app/src/fake-db/db/data-flow-db';
import {
  IConnector,
  IConnectorData,
} from 'apps/flow-chart-app/src/fake-db/db/connector-db';
import { useTheme } from '@mui/system';
import { parseProperties } from './../../../../utils/commonFunctions';
import { ChartBox, IChipProps, IconBar, IconComponent } from '@gessa/ui';
import AddPipeline, {
  IFormSubmit,
  IOption,
} from './add-pipeline/add-pipeline-v2';
import AddTransform2 from './add-transform2/AddTransform2';
import generateRandomString from 'apps/flow-chart-app/src/utils/randomString';
import { Divider, Drawer, List, ListItem, ListItemIcon } from '@mui/material';
import { styled } from '@mui/system';
import SummaryPage, { SummaryPageProps } from './summary-page/SummaryPage';
import { type2Data } from './add-pipeline/pipelineFields';
import { Translate } from '@mui/icons-material';
import { ThemeContext } from 'apps/flow-chart-app/src/context';
import { ITabDraftSlice } from '../store/tabDraftSlice';
import { IProjectContentTreeItem } from '../store/connectorTypesSlice';
import { registerables } from 'chart.js';
import CustomSnackbar from './CustomSnackbar';

export const defaultDrawerWidth = 384;
const minDrawerWidth = 384;
const maxDrawerWidth = 1000;

export interface IDraftObject {
  flowchart: IFlowchart[];
  nodes: IDataFlowNode[];
}

export interface IDefaultValues {
  connectorTypes: any;
  defaultValues: Property[];
}
export interface IDefaultOptions {
  options: IDataFlowNode[];
  type: string;
  elementId: string;
}

export interface IFlowChartUi {
  rawConnectors: IConnectorData[];
  dataFlowDefinition: IChartData;
  draftData: ITabDraftSlice;
  nodesData: IDataFlowNode[];
  connectorTypes: any;
  updateDataFlowApi: (data: IDataFlowUpdateApi) => void;
  saveFormAsDraft: (data: IDataFlowPayload) => void;
  testConnection: (data: any) => void;
  validateQuery?: (data: any) => void;
  testConnectionData: any;
}

const StyledFlowChartUi = styled('div')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.background.main,
    },
    drawer: {
      flexShrink: 0,
    },
    toolbar: 'red',
    // dragger: {
    //   width: '5px',
    //   cursor: 'ew-resize',
    //   padding: '4px 0 0',
    //   borderTop: '1px solid #ddd',
    //   position: 'absolute',
    //   top: 0,
    //   right: 0,
    //   bottom: 0,
    //   zIndex: 100,
    //   backgroundColor: '#f4f7f9',
    // },
  };
});

const icons = [
  {
    key: 'mySqlStore1',
    icon: 'Menu-Postgres',
  },
  {
    key: 'mongodb',
    icon: 'Menu-Mysql',
  },
  {
    key: 'redis',
    icon: 'Menu-Info',
  },
  {
    key: 'postgres',
    icon: 'Menu-Transform',
  },
  {
    key: 'file',
    icon: 'Menu-Info',
  },
  {
    key: 'hdfs',
    icon: 'Menu-Info',
  },
  {
    key: 's3',
    icon: 'Menu-Info',
  },
  {
    key: 'hive',
    icon: 'Menu-Info',
  },
  {
    key: 'sql-server',
    icon: 'Menu-Info',
  },
  {
    key: 'snowflake',
    icon: 'Menu-Info',
  },
  {
    key: 'kafka',
    icon: 'Menu-Info',
  },
  {
    key: 'azure blob',
    icon: 'Menu-Info',
  },
  {
    key: 'sftp',
    icon: 'Menu-Info',
  },
  {
    key: 'hbase/phoenix',
    icon: 'Menu-Info',
  },
  {
    key: 'queryexecutor',
    icon: 'Menu-Info',
  },
  {
    key: 'redshift',
    icon: 'Menu-Info',
  },
  {
    key: 'postgresql',
    icon: 'Menu-Info',
  },
  {
    key: 'clickhouse',
    icon: 'Menu-Info',
  },
  {
    key: 'elastic search',
    icon: 'Menu-Info',
  },
  {
    key: 'delta lake s3',
    icon: 'Menu-Info',
  },
  {
    key: 'salesforce',
    icon: 'Menu-Info',
  },
];
const FlowChartUi = (props: IFlowChartUi) => {
  const theme = useTheme();
  const [dataFlowDefinition, setDataFlowDefinition] = useState<IChartData>();
  const [flowChart, setFlowChart] = useState<IFlowchart[]>([]);
  const [connector, setConnector] = useState<IConnector[]>([]);
  const [nodes, setNodeProps] = useState<IDataFlowNode[]>([]);
  const [allDataFrame, setAllDataframe] = useState(false);
  const [allDataFrameData, setAllDataframeData] = useState<SummaryPageProps>({
    title: 'All Data Frame',
    dataFrames: [],
  });

  const [formStatus, setFormStatus] = useState(false);
  const [defaultValues, setDefaultValues] = useState<IDefaultValues>({
    connectorTypes: [],
    defaultValues: [],
  });
  const [defaultOptions, setDefaultOptions] = useState<IDefaultOptions>({
    elementId: '',
    options: [],
    type: '',
  });
  const [selectedElement, setSelectedElement] = useState<IFlowchart[]>([]);
  const [deleteElement, setDeleteElement] = useState<IFlowchart[]>([]);
  const [newFields, setNewFields] = useState<any>();

  const [draftData, setDraftData] = useState<IDraftObject>();
  const [snackData, setSnackData]: any = React.useState({
    open: false,
    msg: '',
    duration: 6000,
    severity: 'info',
  });
  const theme2 = useContext(ThemeContext);

  const serilizeConnectors = (connectorData: IConnectorData[]) => {
    const connectorObject: IConnector[] = [];
    if (connectorData && connectorData.length) {
      for (let i = 0; i < connectorData.length; i += 1) {
        const index = icons.findIndex(
          (value) =>
            value.key.toLowerCase() === connectorData[i].name.toLowerCase()
        );

        const payload: IConnector = {
          id: connectorData[i]._id,
          connector_id: connectorData[i]._id,
          type: 'Input',
          data: {
            component: 'Card1',
            props: {
              icon: {
                name: icons[index].icon,
                size: 30,
                color: theme.palette.text.primary,
                label: icons[index].icon,
              },
              leftAccent: '',
              text: '',
            },
          },
          position: { x: 150, y: 400 },
        };
        connectorObject.push(payload);
      }
    }

    const store: IConnector = {
      id: 'transformConnector',
      connector_id: 'transformConnector',
      type: 'transform',
      data: {
        component: 'Card1',
        props: {
          icon: {
            name: 'Menu-Transform',
            size: 30,
            color: theme.palette.text.primary,
            label: 'Transform',
          },
          leftAccent: '',
          text: '',
        },
      },
      position: { x: 150, y: 400 },
    };
    connectorObject.push(store);
    setConnector(connectorObject);
  };

  useEffect(() => {
    setDataFlowDefinition(props.dataFlowDefinition);
    setFlowChart(props.dataFlowDefinition?.flowchart);
  }, [props.dataFlowDefinition]);

  useEffect(() => {
    serilizeConnectors(props.rawConnectors);
  }, [props.rawConnectors]);

  useEffect(() => {
    setNodeProps(props.nodesData);
  }, [props.nodesData]);

  useEffect(() => {
    setNewFields([]);
  }, [selectedElement]);

  useEffect(() => {
    if (
      props &&
      props.draftData &&
      props.draftData.data &&
      props.draftData.data.nodes &&
      props.draftData.data.flowchart
    ) {
      setDraftData({
        nodes: props.draftData.data.nodes,
        flowchart: props.draftData.data.flowchart,
      });
    } else {
      setDraftData({
        nodes: [],
        flowchart: [],
      });
    }
  }, [props.draftData]);

  const setNodesData = (tempNodes: IFlowchart[], formData: any) => {
    const nodesObj: IDataFlowNode[] = [];
    if (tempNodes && tempNodes.length) {
      for (let i = 0; i < tempNodes.length; i++) {
        if (tempNodes[i].type !== 'custom' && tempNodes[i].type !== undefined) {
          const index = nodes.findIndex(
            (value: IDataFlowNode) => value.node_id === tempNodes[i].id
          );
          const payload: IDataFlowNode = {
            connector_id:
              tempNodes[i].connector_id || nodes[index].connector_id,
            input_data_frames: [formData.dataFrameName],
            name: tempNodes[i].data?.props.text || '',
            properties:
              index !== -1
                ? nodes[index].properties
                : parseProperties(formData),
            queries: [],
            type: tempNodes[i].type,
            node_id: tempNodes[i].id,
            data_frame_name: index !== -1 ? nodes[index].data_frame_name : '',
          };
          nodesObj.push(payload);
        }
      }
      return nodesObj;
    } else {
      return nodesObj;
    }
  };

  const updateDataFlow = (data: IDataFlowPayload) => {
    const nodesObj = setNodesData(data.flowchart, {});
    if (dataFlowDefinition) {
      const payload: IDataFlowUpdateApi = {
        id: dataFlowDefinition._id,
        data: {
          name: dataFlowDefinition?.name,
          flowchart: data.flowchart,
          nodes: nodesObj,
        },
      };
      props.updateDataFlowApi(payload);
    }
  };

  const elementClicked = (element: IFlowchart[]) => {
    setFormStatus(false);
    setNewFields([]);
    setSelectedElement([]);
    setDefaultOptions({ elementId: '', options: [], type: '' });

    // props.updateDataFlow(element);
    if (nodes && nodes.length && element) {
      const index = nodes.findIndex(
        (value: IDataFlowNode) =>
          value.node_id === element[0].id && element[0].id !== undefined
      );

      if (index !== -1) {
        const _element = JSON.parse(JSON.stringify(element));
        element[0].connector_id = nodes[index].connector_id;
        setSelectedElement(_element);

        const payload: IDefaultValues = {
          connectorTypes: props.connectorTypes,
          defaultValues: nodes[index].properties,
        };

        if (draftData && draftData.nodes.length) {
          const draftNodeIndex = draftData.nodes.findIndex(
            (value: IDataFlowNode) =>
              value.node_id === element[0].id && element[0].id !== undefined
          );
          if (
            draftNodeIndex !== -1 &&
            draftData.nodes[draftNodeIndex].properties !== undefined
          ) {
            payload.defaultValues = draftData.nodes[draftNodeIndex].properties;
          }
        }
        setDefaultValues(payload);
      } else {
        setSelectedElement(element);
      }
    }

    // const options: IOption[] = serilizeOptions(element[0]);

    const payload = {
      options: nodes,
      type: element[0].type,
      elementId: element[0].id,
    };
    setDefaultOptions(payload);
    const newFieldsArray = [];
    const index = props.rawConnectors.findIndex(
      (value) => value._id === element[0].connector_id
    );
    if (index !== -1) {
      const node_properties = props.rawConnectors[index].properties.filter(
        (value) => value.property_type === 'node_property'
      );
      for (let i = 0; i < node_properties.length; i += 1) {
        const fieldPayload = {
          type: 'text',
          value: [''],
          label: node_properties[i].key,
          name: node_properties[i].key,
          placeholder: 'Enter ' + node_properties[i].key,
          options: [],
          required: true,
          validation: {
            name: node_properties[i].key,
            required: true,
            errorMessage: node_properties[i].key + ' is required',
            min: 0,
            max: 0,
          },
        };
        newFieldsArray.push(fieldPayload);
      }
    }
    setNewFields(newFieldsArray);
    setFormStatus(true);
  };
  const onHideSnackBar = React.useCallback(() => {
    setSnackData({
      msg: '',
      open: false,
      severity: 'info',
      duration: 6000,
    });
  }, []);

  const setColors = (name: string): string => {
    switch (name.toLowerCase()) {
      case 'input':
        return theme.palette.custom.inputNode;
      case 'store':
      case 'output':
        return theme.palette.custom.outputNode;
      case 'transform':
        return theme.palette.custom.transformNode;
    }
    return theme.palette.custom.transformNode;
  };

  const openSnackbar = () => {
    return (
      <CustomSnackbar
        msg={'The property set was successful'}
        open={true}
        onClose={onHideSnackBar}
        duration={snackData.duration}
        severity={snackData.severity}
      />
    );
  };

  const saveFormData = (data: IFormSubmit) => {
    // if (data.type.toLowerCase() === 'draft') {
    //   // setFormStatus(false);
    //   return;
    // }
    if (data.type.toLowerCase() === 'test') {
      const payload = {
        pipeline_id: 'p001',
        input_id: 'ip001',
        input_type: 'MySQL',
        input_df_name: 'student',
        input_df_id: 'p0101',
        endpoint_details: {
          endpoint_type: 'MySQL',
          properties: [
            {
              key: 'jdbcUrl',
              value: 'jdbc:mysql://localhost:3306',
            },
            {
              key: 'user',
              value: 'root',
            },
            {
              key: 'password',
              value: 'pass',
            },
            {
              key: 'driver',
              value: 'com.mysql.jdbc.Driver',
            },
          ],
        },
        input_properties: [
          {
            key: 'database',
            value: 'demo',
          },
          {
            key: 'table',
            value: 'country',
          },
        ],
      };
      return props.testConnection(payload);
    }
    if (!data.data && data.type === 'cancel') {
      setFormStatus(data.data);
      return;
    }
    if (data.type.toLowerCase() === 'delete') {
      setDeleteElement(selectedElement);
      setFormStatus(false);
      const chart: IFlowchart[] = JSON.parse(JSON.stringify(flowChart));
      const _nodesData: IDataFlowNode[] = JSON.parse(JSON.stringify(nodes));

      const removeElementsArray: IFlowchart[] = selectedElement;
      if (removeElementsArray && removeElementsArray.length > 0) {
        for (let j = 0; j < removeElementsArray.length; j += 1) {
          const removeindex = chart.findIndex(
            (value: IFlowchart) => value.id === removeElementsArray[j].id
          );
          const nodeIndex = _nodesData.findIndex(
            (value: IDataFlowNode) =>
              value.node_id === removeElementsArray[j].target
          );

          if (nodeIndex !== -1) {
            const tagsIndex = _nodesData[nodeIndex].properties.findIndex(
              (value: Property) => value.key === 'tags'
            );
            if (tagsIndex !== -1) {
              const tagArray =
                _nodesData[nodeIndex].properties[tagsIndex].value.split(',');
              const tagArrayIndex = tagArray.findIndex(
                (value: string) => value === removeElementsArray[j].source
              );
              if (tagArrayIndex !== -1) {
                tagArray.splice(tagArrayIndex, 1);
              }
              _nodesData[nodeIndex].properties[tagsIndex].value =
                tagArray.toString();
            }
          }

          chart.splice(removeindex, 1);
        }
      }
      // let chart: IFlowchart[] = JSON.parse(JSON.stringify(flowChart));
      // chart = chart.filter((value: any) => value.id !== selectedElement[0].id);
      setFlowChart(chart);
      setNodeProps(_nodesData);
      const payload: IDataFlowPayload = {
        name: '',
        nodes: _nodesData,
        flowchart: chart,
      };
      setSelectedElement([]);

      if (dataFlowDefinition) {
        const payload: IDataFlowUpdateApi = {
          id: dataFlowDefinition._id,
          data: {
            name: dataFlowDefinition?.name,
            flowchart: chart,
            nodes: _nodesData,
          },
        };
        props.updateDataFlowApi(payload);
      }
      setNewFields([]);
      return;
    }
    if (
      data.type.toLowerCase() === 'save' ||
      data.type.toLowerCase() === 'draft'
    ) {
      setFormStatus(false);
      let chart: IFlowchart[] = JSON.parse(JSON.stringify(flowChart));
      const _selectedElement: IFlowchart[] = JSON.parse(
        JSON.stringify(selectedElement)
      );
      const _nodesData: IDataFlowNode[] = JSON.parse(JSON.stringify(nodes));

      if (
        _selectedElement &&
        _selectedElement.length > 0 &&
        _selectedElement[0].id
      ) {
        const index = flowChart.findIndex(
          (value: IFlowchart) => value.id === _selectedElement[0].id
        );
        if (index > -1) {
          _selectedElement[0].type = data.data.connectorType
            ? data.data.connectorType
            : _selectedElement[0].type;

          if (_selectedElement[0].data) {
            _selectedElement[0].data.props.text = data.data.name;
            _selectedElement[0].data.props.leftAccent = setColors(
              _selectedElement[0].type
            );
          }
          chart[index] = _selectedElement[0];
        }
        const index2 = _nodesData.findIndex(
          (value: IDataFlowNode) => value.node_id === _selectedElement[0].id
        );
        if (index2 !== -1) {
          data.data.tags = data.data.tags.filter(
            (v: any, i: any, a: any): any => a.indexOf(v) === i
          );

          _nodesData[index2].properties = parseProperties(data.data);
          _nodesData[index2].name = data.data.name;
          _nodesData[index2].type = data.data.connectorType
            ? data.data.connectorType
            : _selectedElement[0].type;
        }
      }
      if (
        _selectedElement[0].type.toLowerCase() === 'input' ||
        _selectedElement[0].type.toLowerCase() === 'transform' ||
        _selectedElement[0].type.toLowerCase() === 'store'
      ) {
        // if (data.tags && data.tags.length) {
        chart = getTagsSeperated(
          data.data,
          _nodesData,
          chart,
          _selectedElement
        );
        const edgeArray: IFlowchart[] = chart.filter(
          (value: IFlowchart) => value.type.toLowerCase() === 'custom'
        );
        const transEdgeArray: IFlowchart[] = edgeArray.filter(
          (value: IFlowchart) => value.target === _selectedElement[0].id
        );
        const removeIndexArray: string[] = [];
        for (let i = 0; i < transEdgeArray.length; i += 1) {
          const index = data.data.tags.findIndex(
            (value: IOption) => value.value === transEdgeArray[i].source
          );
          if (index === -1) {
            removeIndexArray.push(transEdgeArray[i].id);
          }
        }
        for (let i = 0; i < removeIndexArray.length; i += 1) {
          const chartIndex = chart.findIndex(
            (value: IFlowchart) => value.id === removeIndexArray[i]
          );
          if (chartIndex !== -1) {
            chart.splice(chartIndex, 1);
          }
        }
        for (let i = 0; i < chart.length; i += 1) {
          const edgeArray: IFlowchart[] = chart.filter(
            (value: IFlowchart) => value.type.toLowerCase() === 'custom'
          );

          if (chart[i].type.toLowerCase() === 'input') {
            const removeElementsArray = edgeArray.filter(
              (value: IFlowchart) => value.target === chart[i].id
            );
            if (removeElementsArray && removeElementsArray.length > 0) {
              for (let j = 0; j < removeElementsArray.length; j += 1) {
                const removeindex = chart.findIndex(
                  (value: IFlowchart) => value.id === removeElementsArray[j].id
                );
                if (removeindex !== -1) {
                  chart.splice(removeindex, 1);
                }
              }
            }
            chart = getTagsSeperated(
              data.data,
              _nodesData,
              chart,
              _selectedElement
            );
            if (chart[i].type.toLowerCase() === 'store') {
              const removeElementsArray: IFlowchart[] = edgeArray.filter(
                (value: IFlowchart) => value.source === chart[i].id
              );
              if (removeElementsArray && removeElementsArray.length > 0) {
                for (let j = 0; j < removeElementsArray.length; j += 1) {
                  const removeindex = chart.findIndex(
                    (value: IFlowchart) =>
                      value.id === removeElementsArray[j].id
                  );
                  const nodeIndex = _nodesData.findIndex(
                    (value: IDataFlowNode) =>
                      value.node_id === removeElementsArray[j].target
                  );

                  if (nodeIndex !== -1) {
                    const tagsIndex = _nodesData[
                      nodeIndex
                    ].properties.findIndex(
                      (value: Property) => value.key === 'tags'
                    );
                    if (tagsIndex !== -1) {
                      const tagArray =
                        _nodesData[nodeIndex].properties[tagsIndex].value.split(
                          ','
                        );
                      const tagArrayIndex = tagArray.findIndex(
                        (value: string) =>
                          value === removeElementsArray[j].source
                      );
                      if (tagArrayIndex !== -1) {
                        tagArray.splice(tagArrayIndex, 1);
                      }
                      _nodesData[nodeIndex].properties[tagsIndex].value =
                        tagArray.toString();
                    }
                  }

                  chart.splice(removeindex, 1);
                }
              }
              chart = getTagsSeperated(
                data.data,
                _nodesData,
                chart,
                _selectedElement
              );
            }
          }
        }

        const chartNew: IFlowchart[] = chart.filter(
          (value) => value.type !== 'custom'
        );
        const uniqueEdge: IFlowchart[] = chart.filter(
          (tag, index, array) =>
            array.findIndex(
              (t) =>
                t.source === tag.source &&
                t.target === tag.target &&
                t.type.toLowerCase() === 'custom' &&
                tag.type.toLowerCase() === 'custom'
            ) === index
        );
        const _chartNew: IFlowchart[] = [...chartNew, ...uniqueEdge];

        if (data.type.toLowerCase() === 'save') {
          setFlowChart(_chartNew);
          setNodeProps(_nodesData);
          setSelectedElement([]);
          if (dataFlowDefinition) {
            const payload: IDataFlowUpdateApi = {
              id: dataFlowDefinition._id,
              data: {
                name: dataFlowDefinition?.name,
                flowchart: _chartNew,
                nodes: _nodesData,
              },
            };

            props.updateDataFlowApi(payload);
          }
          setNewFields([]);
        } else {
          setSelectedElement([]);

          if (dataFlowDefinition) {
            const payload: IDataFlowPayload = {
              name: dataFlowDefinition.name,
              flowchart: _chartNew,
              nodes: _nodesData,
            };
            setDraftData({ flowchart: flowChart, nodes });
            // props.updateDataFlowApi(payload);
            props.saveFormAsDraft(payload);
          }
        }
      }
    }
  };

  const getTagsSeperated = (
    data: any,
    _nodesData: IDataFlowNode[],
    chart: IFlowchart[],
    _selectedElement: IFlowchart[]
  ) => {
    for (let i = 0; i < data.tags.length; i += 1) {
      const index3 = _nodesData.findIndex(
        (value: IDataFlowNode) => value.node_id === data.tags[i].value
      );
      const customEdges: IFlowchart[] = chart.filter(
        (value: IFlowchart) => value.type.toLowerCase() === 'custom'
      );
      const edgeIndex = customEdges.findIndex(
        (value: IFlowchart) =>
          value.source === _selectedElement[0].id &&
          value.target === data.tags[i].value
      );
      if (edgeIndex === -1 && data.tags[i].value.toLowerCase() !== 'select') {
        const connectedEdge: IFlowchart = {
          id: generateRandomString(),
          connector_id: '',
          target: _selectedElement[0].id,
          source: data.tags[i].value,
          type: 'custom', // smooth edge
          arrowHeadType: 'arrowclosed',
        };
        chart.push(connectedEdge);
      }
    }
    return chart;
  };

  const sendChartData = (data: IFlowchart[]) => {
    const payload: IDataFlowPayload = {
      flowchart: data,
      nodes: [],
      name: '',
    };
    updateDataFlow(payload);
  };

  const addNewNode = (data: IFlowchart[]) => {
    const payload: IDataFlowPayload = {
      flowchart: data,
      nodes: [],
      name: '',
    };
    updateDataFlow(payload);
    setFlowChart(data);
  };

  const openDataFrame = () => {
    if (allDataFrame) {
      setAllDataframe(false);
    } else {
      setAllDataframe(true);
    }
    const dataFrameData = JSON.parse(JSON.stringify(nodes));
    const dataFramePayload: SummaryPageProps = {
      title: 'All Data Frames',
      dataFrames: [],
    };

    for (let i = 0; i < dataFrameData.length; i += 1) {
      if (dataFrameData[i].name) {
        const chipPayload: IChipProps = {
          text: dataFrameData[i].name,
          style: 'outline',
        };
        const index = dataFramePayload.dataFrames.findIndex(
          (value) =>
            value.title.toLowerCase() === dataFrameData[i].type.toLowerCase()
        );
        if (index === -1) {
          const dataFramesPayload = {
            title: dataFrameData[i].type,
            subtitle: 'lorem ipsum',
            actions: [],
          };
          dataFramePayload.dataFrames.push(dataFramesPayload);
          const index = dataFramePayload.dataFrames.findIndex(
            (value) =>
              value.title.toLowerCase() === dataFrameData[i].type.toLowerCase()
          );
          if (index !== -1) {
            dataFramePayload.dataFrames[index].actions.push(chipPayload);
          }
        } else {
          dataFramePayload.dataFrames[index].actions.push(chipPayload);
        }
      }
    }
    setAllDataframeData(dataFramePayload);
  };

  const [drawerWidth, setDrawerWidth] = useState(defaultDrawerWidth);

  const handleMouseDown = (e: MouseEvent) => {
    document.addEventListener('mouseup', handleMouseUp, true);
    document.addEventListener('mousemove', handleMouseMove, true);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp, true);
    document.removeEventListener('mousemove', handleMouseMove, true);
  };

  const handleMouseMove = useCallback((e) => {
    const newWidth =
      document.body.offsetWidth - (e.clientX - document.body.offsetLeft);
    if (newWidth > minDrawerWidth && newWidth < maxDrawerWidth) {
      setDrawerWidth(newWidth);
    }
  }, []);

  const validateQuery = (data: any) => {
    console.log(data);
    props.validateQuery && props.validateQuery(data);
  };

  return (
    <div className="flex flex-col flex-grow w-full h-full">
      <div className="relative top-4 z-20">
        <div className="flex flex-col absolute z-20 ">
          {connector && connector.length && (
            <div className="left-0">
              <IconBar data={connector} />
            </div>
          )}
        </div>
      </div>
      <div className=" w-full h-full flex flex-col flex-grow">
        {flowChart && (
          <div className="h-full">
            <ChartBox
              data={flowChart}
              sendChartData={sendChartData}
              elementClicked={elementClicked}
              addNewNode={addNewNode}
              // deleteNode={deleteElement}
            />
          </div>
        )}
      </div>
      <StyledFlowChartUi>
        {formStatus && (
          <Drawer
            style={{ flexShrink: 0 }}
            variant="permanent"
            PaperProps={{
              style: {
                width: drawerWidth,
                borderLeft: '1px solid rgba(255,255,255,0.12)',
                top: '50px',
                height: 'calc(100vh - 50px)',
              },
            }}
            anchor="right"
          >
            <div className="flex flex-row">
              <div
                onMouseDown={(e: any) => handleMouseDown(e)}
                style={{
                  width: '1px',
                  cursor: 'ew-resize',
                  padding: '4px 0 0',
                  borderTop: '1px solid #191919',
                  position: 'absolute',
                  top: 40,
                  left: 0,
                  bottom: '90%',
                  zIndex: 100,
                  backgroundColor: '#f4f7f9',
                }}
              />
              <div
                className={`w-full right-0   z-20   ${
                  formStatus ? 'absolute' : 'hidden'
                }`}
              >
                {formStatus && (
                  <div
                    className="w-full flex flex-col flex-grow"
                    style={{
                      backgroundColor: theme.palette.background.default,
                    }}
                  >
                    {selectedElement &&
                      selectedElement?.length &&
                      (selectedElement[0]?.type.toLowerCase() === 'input' ||
                        selectedElement[0].type.toLowerCase() === 'store' ||
                        selectedElement[0]?.type.toLowerCase() ===
                          'output') && (
                        <AddPipeline
                          testConnectionData={props.testConnectionData}
                          selectedElement={selectedElement[0]}
                          rawConnectors={props.rawConnectors}
                          newFields={newFields}
                          defaultValues={defaultValues}
                          defaultOptions={defaultOptions}
                          sendFormData={saveFormData}
                        />
                      )}
                    {selectedElement &&
                      selectedElement?.length &&
                      selectedElement[0]?.type.toLowerCase() ===
                        'transform' && (
                        <AddTransform2
                          sendFormData={saveFormData}
                          defaultValues={defaultValues}
                          defaultOptions={defaultOptions}
                          validateQuery={validateQuery}
                        />
                      )}
                  </div>
                )}
              </div>
            </div>
          </Drawer>
        )}
      </StyledFlowChartUi>

      <div className="absolute top-0  right-0 flex flex-row">
        <div className="relative" onClick={() => openDataFrame()}>
          <div
            style={{
              width: '36px',
              height: '36px',
              backgroundColor: '#191919',
              right: '0px',
              left: allDataFrame ? '5px' : '0px',
              position: 'relative',
              cursor: 'pointer',
              borderLeft: '1px solid rgba(255,255,255,0.12)',
              borderTop: '1px solid rgba(255,255,255,0.12)',
              borderBottom: '1px solid rgba(255,255,255,0.12)',
            }}
            onMouseDown={(e: any) => handleMouseDown(e)}
            className="flex flex-col justify-center items-center flex-grow"
          >
            <IconComponent
              name="Union"
              color="white"
              style="boxed"
              label={allDataFrame ? 'Collapse' : 'Expand'}
              size={25}
            />
          </div>
          {allDataFrame && (
            <div
              className="relative"
              style={{
                width: allDataFrame ? drawerWidth + 36 : 36,
                // backgroundColor: theme.palette.background.default,
                height: 'calc(100vh - 50px)',
              }}
            >
              <Drawer
                style={{ flexShrink: 0 }}
                variant="permanent"
                PaperProps={{
                  style: {
                    width: drawerWidth,
                    height: 'calc(100vh - 50px)',
                    top: '50px',
                    overflowY: 'hidden',
                  },
                }}
                anchor="right"
              >
                <div
                  className="w-full flex flex-col flex-grow"
                  style={{ backgroundColor: '#191919' }}
                >
                  <SummaryPage
                    title={allDataFrameData?.title}
                    dataFrames={allDataFrameData?.dataFrames}
                    setAllDataframeStatus={() => {
                      setAllDataframe(false);
                      setDrawerWidth(0);
                    }}
                  />
                </div>
              </Drawer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlowChartUi;
