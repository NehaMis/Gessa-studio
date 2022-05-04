// Imports
import mock from '../mock';
import onSuccess from '../../utils/responseWrapper';
import generateRandomString from '../../utils/randomString';

//Interface
export interface IProperty {
  key: string;
  value: string;
  _id: string;
}

export interface IDataFlowNode {
  type: string;
  name: string;
  connector_id: string;
  properties: IProperty[];
  input_data_frames: any[];
  queries: any[];
  _id: string;
  node_id: string;
}

const dataFlowNode = {
  data: [
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
  ],
};

// API Endpoints
// READ
mock
  .onGet(
    new RegExp(
      process.env.NX_DATA_FLOW_BASE_URL + '/data-flow/node/' + /[a-z0-9]*/
    )
  )
  .reply((request) => {
    return [200, onSuccess(dataFlowNode)];
  });

// CREATE
mock
  .onPost(
    new RegExp(
      process.env.NX_DATA_FLOW_BASE_URL + '/data-flow/node/' + /[a-z0-9]*/
    )
  )
  .reply((request) => {
    let newData = JSON.parse(request.data);
    newData = {
      ...newData,
      _id: generateRandomString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    dataFlowNode.data = [...dataFlowNode.data, newData];

    return [200, onSuccess(newData, 'Node created successfully')];
  });

// PUT
mock
  .onPut(
    new RegExp(
      process.env.NX_DATA_FLOW_BASE_URL + '/data-flow/node/' + /[a-z0-9]*/
    )
  )
  .reply((request) => {
    let newData = JSON.parse(request.data);
    newData = {
      ...newData,
      _id: generateRandomString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    dataFlowNode.data = [...dataFlowNode.data, newData];

    return [200, onSuccess(newData, 'Node created successfully')];
  });

// DELETE
mock
  .onDelete(
    new RegExp(
      process.env.NX_DATA_FLOW_BASE_URL + '/data-flow/node/' + /[a-z0-9]*/
    )
  )
  .reply((request) => {
    const newData = JSON.parse(request.data);
    const index = dataFlowNode.data.findIndex(
      (value) => value._id === newData.__id
    );
    if (index !== -1) {
      dataFlowNode.data = [...dataFlowNode.data.splice(index, 1)];
    }
    return [200, onSuccess(newData, 'Node created successfully')];
  });
