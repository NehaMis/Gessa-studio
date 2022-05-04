import { Button } from '@mui/material';
import generateRandomString from 'apps/flow-chart-app/src/utils/randomString';
import { useEffect, useContext, useState, useMemo } from 'react';
import FlowChartUi from './components/FlowChartUi';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext, ThemeContext } from '../../../context';
import { IRootState } from 'apps/flow-chart-app/src/store';
import {
  edpDataframeGetData,
  getFlowChartData,
  inputStoreData,
  selectDataFlowDataById,
  updateFlowChart,
} from './store/dataFlowDataSlice';
import { selectDataFlowIds, setChart } from './store/dataFlowSlice';
import { selectNodes, setNodes } from './store/nodesDataSlice';
import { getConnectors, selectAllConnectors } from './store/connectorSlice';
import {
  IChartData,
  IDataFlowGetApi,
  IDataFlowPayload,
  IDataFlowUpdateApi,
} from 'apps/flow-chart-app/src/fake-db/db/data-flow-db';
import { IConnectorGetApi } from 'apps/flow-chart-app/src/fake-db/db/connector-db';
import {
  getProjectContentTreeApi,
  selectProjectContentTree,
} from './store/connectorTypesSlice';
import {
  ITabDraftSlice,
  selectAllDraftData,
  selectDraftDataById,
  setTabDraft,
} from './store/tabDraftSlice';
import {
  getProjectConnectorsApi,
  selectProjectConnectors,
} from './store/projectConnector';
import {
  selectEDPs,
  // getDataFrameListApi,
  updateTestConnection,
  validateSqlQuery,
} from './store/edpDataSlice';
import {
  getDataFrameListApi,
  selectEDPDataFrames,
} from './store/edpDataFrameSlice';

interface IFlowChartProps {
  project_id: string;
  project_content_id: string;
  flow_id?: string;
}

export interface IFlowChartSelectedPipeline {
  proj_id: string;
  pipe_id: string;
}

// const projectData = [
//   {
//     proj_id: '61a8942b0c01e9b1f29f7828',
//     pipe_id: '61a8942b0c01e9b1f29f782b',
//     flow_id: '61b2d402052b8bf1e43a7d83',
//   },
//   {
//     proj_id: '61a8942b0c01e9b1f29f7828',
//     pipe_id: '61a897450c01e9b1f29f7832',
//     flow_id: '61a89c8366ce12c0a1f796d6',
//   },
// ];

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'First name', width: 100 },
  { field: 'lastName', headerName: 'Last name', width: 100 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 100,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 100,
    valueGetter: (params: any) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];
const rows = [
  { id: 1, lastName: 'Snow1', firstName: 'Jon1', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
export const FlowChart = ({
  project_id = '61a8942b0c01e9b1f29f7828',
  project_content_id = '61a8942b0c01e9b1f29f782b',
}: IFlowChartProps) => {
  const theme = useContext(ThemeContext);
  const rootState = useSelector((state: IRootState) => state);
  const dispatch = useDispatch();
  const [selectedPipeline, setSelectedPipeline] =
    useState<IFlowChartSelectedPipeline>({
      pipe_id: '61a8942b0c01e9b1f29f7828',
      proj_id: '61a8942b0c01e9b1f29f782b',
    });
  useEffect(() => {
    const params: IConnectorGetApi = {
      page: 0,
      size: 10,
    };
    dispatch(getConnectors(params));
    if (selectedPipeline) {
      const params2: IDataFlowGetApi = {
        page: 0,
        size: 10,
        filters: {
          project_id: selectedPipeline.proj_id,
          pipeline_id: selectedPipeline.pipe_id,
        },
      };
      dispatch(getFlowChartData(params2));
    }
    dispatch(
      // getProjectContentTreeApi({ project_id: selectedPipeline.proj_id })
      getProjectConnectorsApi({ project_id: selectedPipeline.proj_id })
    );
    dispatch(
      setTabDraft({
        id: project_content_id,
        data: { nodes: [], flowChart: [] },
      })
    );
  }, [dispatch, selectedPipeline]);

  useMemo(() => {
    setSelectedPipeline({
      proj_id: project_id,
      pipe_id: project_content_id,
    });
  }, [setSelectedPipeline, project_id, project_content_id]);

  const dataFlowDefinition: any = selectedPipeline
    ? selectDataFlowDataById(rootState, selectedPipeline.pipe_id)
    : null;
  const nodesData = selectNodes(rootState);
  const rawConnectors = selectAllConnectors(rootState);
  // const connectorTypes = selectProjectContentTree(rootState);
  const connectorTypes = selectProjectConnectors(rootState);
  const dataFrameList = selectEDPDataFrames(rootState);
  const queryResult = selectEDPs(rootState); //query result will contain rows and columns of executed query and copied in testconnectionData
  const [testConnectionData, setTestConnectionData] = useState({
    cols: columns,
    rows: rows,
  });

  useEffect(() => {
    if (dataFrameList && dataFrameList.length) {
      const columnObj = [];
      for (let i = 0; i < dataFrameList[0].Schema.length; i += 1) {
        const obj = {
          field: dataFrameList[0].Schema[i].fieldName,
          headerName: dataFrameList[0].Schema[i].fieldName,
          width: 100,
        };
        columnObj.push(obj);
      }
      setTestConnectionData({
        cols: columnObj,
        rows: dataFrameList[0].Records,
      });
    }
  }, [dataFrameList]);

  const updateDataFlow = (data: IDataFlowUpdateApi) => {
    dispatch(setChart(data.data.flowchart));
    dispatch(setNodes(data.data.nodes));
    dispatch(updateFlowChart(data));
  };

  const draft: any = selectedPipeline
    ? selectDraftDataById(rootState, selectedPipeline.pipe_id)
    : null;

  const resetFlowChart = () => {
    if (dataFlowDefinition) {
      const payload: IDataFlowUpdateApi = {
        id: dataFlowDefinition._id,
        data: {
          name: dataFlowDefinition?.name,
          flowchart: [],
          nodes: [],
        },
      };
      dispatch(updateFlowChart(payload));
    }
  };
  const saveDraftData = (data: IDataFlowPayload) => {
    const payload: ITabDraftSlice = {
      id: selectedPipeline.pipe_id,
      data: data,
    };
    dispatch(setTabDraft(payload));
  };

  const testConnection = (data: any) => {
    const obj = {
      pipelineId: project_content_id,
      endpointId: 'ep001',
      endpointName: 'dataeaze',
      endpointType: 'MySQL',
      details: [
        {
          key: 'jdbcUrl',
          value: 'jdbc:mysql://3.134.193.236:3306',
        },
        {
          key: 'user',
          value: 'chaminda',
        },
        {
          key: 'password',
          value: 'password',
        },
        {
          key: 'driver',
          value: 'com.mysql.jdbc.Driver',
        },
      ],
    };
    dispatch(updateTestConnection(obj));
    getDataFrameList(data);

    // dispatch(edpDataframeGetData(data));
    // dispatch(inputStoreData(data));
  };
  const getDataFrameList = (data: any) => {
    const obj = {
      pipelineId: '001',
      dataframes: 'Demo',
    };
    const myData = dispatch(getDataFrameListApi(obj));
    console.log(myData);
  };

  const validateQuery = (data: any) => {
    const obj = {
      pipelineID: '001',
      transformID: '01',
      outputDfName: 'stdueteach11',
      inputDfList: 'dmo',
      transformQuery: data,
    };
    dispatch(validateSqlQuery(obj));
  };
  return (
    <div className="relative box-border overflow-x-hidden overflow-y-auto">
      <div className="relative">
        {project_id &&
          project_content_id &&
          dataFlowDefinition &&
          nodesData &&
          rawConnectors && (
            <FlowChartUi
              dataFlowDefinition={dataFlowDefinition}
              nodesData={nodesData}
              draftData={draft}
              rawConnectors={rawConnectors}
              updateDataFlowApi={updateDataFlow}
              connectorTypes={connectorTypes}
              saveFormAsDraft={saveDraftData}
              testConnection={testConnection}
              validateQuery={validateQuery}
              testConnectionData={testConnectionData}
            />
          )}
      </div>
    </div>
  );
};

export default FlowChart;
