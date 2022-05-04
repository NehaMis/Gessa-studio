// Imports
import mock from '../mock';
import onSuccess from '../../utils/responseWrapper';
import generateRandomString from '../../utils/randomString';

// Interfaces

export interface IDataFlowPayload {
  name: string;
  flowchart: IFlowchart[];
  nodes: IDataFlowNode[];
}
export interface IDataFlowUpdateApi {
  id: string;
  data: IDataFlowPayload;
}

export interface IDataflowGetApiFilters {
  project_id?: string;
  pipeline_id?: string;
}
export interface IDataFlowGetApi {
  page: number;
  size: number;
  filters: IDataflowGetApiFilters;
}

export interface IIcon {
  name: string;
  size: number;
  color: string;
  label: string;
}

export interface IProps {
  icon: IIcon;
  leftAccent: string;
  text: string;
  children: string;
}

export interface IData {
  component: string;
  props: IProps;
}

export interface IPosition {
  x: number;
  y: number;
}

export interface IFlowchart {
  id: string;
  type: string;
  data?: IData;
  position?: IPosition;
  source?: string;
  target?: string;
  animated?: boolean;
  connector_id: string;
  arrowHeadType?: string;
}

export interface Property {
  key: string;
  value: string;
  _id?: string;
}

export interface Query {
  query_index: number;
  output_data_frame_name: string;
  query: string;
  query_file_path: string;
  _id: string;
}

export interface IDataFlowNode {
  type: string;
  name: string;
  connector_id: string;
  properties: Property[];
  input_data_frames: string[];
  node_id: string;
  queries: Query[];
  _id?: string;
  data_frame_name: string;
}

export interface IChartData {
  flowchart: IFlowchart[];
  _id: string;
  name: string;
  description: string;
  project_id: string;
  definition_latest_version: string;
  tags: string[];
  definition_all_version: string[];
  arguments: string[];
  is_delete: number;
  created_at: string;
  updated_at: string;
  __v: number;
  nodes: IDataFlowNode[];
  pipeline_id: string;
  version_name: string;
  version_number: string;
}

export interface IflowChartDB {
  data: Array<IChartData>;
  count: number;
}

// Structure
const flowChartDB = {
  data: [
    {
      flowchart: [],
      _id: '619ca8788cf742c65c66ad22',
      name: 'dataflow1',
      description: 'string',
      project_id: 'string',
      definition_latest_version: 'string',
      tags: ['string'],
      definition_all_version: ['string'],
      arguments: ['string'],
      is_delete: 0,
      created_at: '2021-11-23T08:38:16.967Z',
      updated_at: '2021-11-23T08:38:16.967Z',
      __v: 0,
      nodes: [],
    },
    {
      _id: '61a89c8366ce12c0a1f796d6',
      name: 'Pipeline3',
      description: 'string',
      tags: ['string'],
      project_id: '61a8942b0c01e9b1f29f7828',
      pipeline_id: '61a897450c01e9b1f29f7832',
      version_name: 'string',
      version_number: 'string',
      is_delete: 0,
      nodes: [
        {
          type: 'input',
          name: 'Students',
          connector_id: '61a853edb27f8425bbddf2be',
          properties: [
            {
              key: 'Database',
              value: 'Demo',
              _id: '61a8a781684de3c2649cdd5e',
            },
            {
              key: 'Table',
              value: 'India',
              _id: '61a8a781684de3c2649cdd5f',
            },
          ],
          input_data_frames: [],
          queries: [],
          _id: '61a8a781684de3c2649cdd5d',
        },
        {
          type: 'input',
          properties: [
            {
              key: 'Database',
              value: 'Demo1',
              _id: '61a8ae97a708fafef8f1a23a',
            },
          ],
          input_data_frames: [],
          _id: '61a8ae97a708fafef8f1a239',
          queries: [],
        },
      ],
      created_at: '2021-12-02T10:14:27.467Z',
      updated_at: '2021-12-02T11:31:35.504Z',
      __v: 0,
      flowchart: [
        {
          id: '1',
          type: 'input',
          data: {
            component: 'GessaCard1',
            props: {
              icon: {
                name: 'Preview',
                size: 40,
                color: '#459ff2',
                label: 'Preview',
              },
              leftAccent: '',
              text: '',
            },
          },
          position: {
            x: 10,
            y: 10,
          },
        },
        {
          id: '2',
          data: {
            component: 'div',
            props: {
              children: 'Default Code',
            },
          },
          position: {
            x: 80,
            y: 265,
          },
        },
        {
          id: 'e1-2',
          source: '1',
          target: '2',
          animated: true,
        },
      ],
    },
    {
      _id: '61ad278bfb09e52b63b0b531',
      name: 'string',
      description: 'string',
      tags: ['string'],
      project_id: 'string',
      pipeline_id: 'string',
      version_name: 'string',
      version_number: 'string',
      nodes: [
        {
          type: 'string',
          name: 'string',
          data_frame_name: 'string',
          connector_id: 'string',
          properties: [
            {
              key: 'string',
              value: 'string',
              _id: '61ad278cfb09e52b63b0b533',
            },
          ],
          input_data_frames: ['string'],
          queries: [
            {
              query_index: 0,
              output_data_frame_name: 'string',
              query: 'string',
              query_file_path: 'string',
              _id: '61ad278cfb09e52b63b0b534',
            },
          ],
          _id: '61ad278cfb09e52b63b0b532',
        },
      ],
      flowchart: [],
      is_delete: 0,
      created_at: '2021-12-05T20:56:44.193Z',
      updated_at: '2021-12-05T20:56:44.193Z',
      __v: 0,
    },
  ],
  count: 3,
};

// API Endpoints
// READ
mock
  .onGet(new RegExp(process.env.NX_DATA_FLOW_BASE_URL + '/data-flow'))
  .reply((request) => {
    return [200, onSuccess(flowChartDB)];
  });

// CREATE
mock
  .onPost(new RegExp(process.env.NX_DATA_FLOW_BASE_URL + '/data-flow'))
  .reply((request) => {
    let newData = JSON.parse(request.data);
    newData = {
      ...newData,
      _id: generateRandomString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    flowChartDB.data = [...flowChartDB.data, newData];
    flowChartDB.count = flowChartDB.data.length;

    return [200, onSuccess(newData, 'Chart created successfully')];
  });

// UPDATE
mock
  .onPut(
    new RegExp(process.env.NX_DATA_FLOW_BASE_URL + '/data-flow/' + /[a-z0-9]*/)
  )
  .reply((request) => {
    let newData = JSON.parse(request.data);
    newData = {
      ...newData,
      updated_at: new Date().toISOString(),
    };

    return [200, onSuccess(newData, 'Chart updated successfully')];
  });
