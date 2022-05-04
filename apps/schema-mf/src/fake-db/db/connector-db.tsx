// Imports
import mock from '../mock';
import onSuccess from '../../utils/responseWrapper';
import { Card1Props } from '@gessa/ui';

// Interfaces

export interface IConnectorGetApi {
  page: number;
  size: number;
}
export interface IConnectorDataProp {
  component: string;
  props: Card1Props;
}
export interface IConnectorPosition {
  x: number;
  y: number;
}
export interface IConnector {
  id: string;
  connector_id: string;
  type: string;
  data: IConnectorDataProp;
  position: IConnectorPosition;
}

export interface IConProperty {
  key: string;
  datatype: string;
  property_type: string;
  _id: string;
}

export interface IConnectorData {
  _id: string;
  name: string;
  description: string;
  tags: string[];
  icon: string;
  properties: IConProperty[];
  status: string;
  is_delete: number;
  created_at: Date;
  updated_at: Date;
  __v: number;
}

export interface Result {
  data: IConnectorData[];
  count: number;
}

// Structure
const connectorDB = {
  data: [
    {
      _id: '61ade47308d89eda1562865c',
      name: 'mongo',
      description: 'string',
      tags: ['mongo', 'db'],
      icon: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoppng.com%2Ffree-image%2F9kib-354x415-unnamed-mongodb-logo-sv-PNG-free-PNG-Images_164419&psig=AOvVaw216eRZgej2WpFHcAfWTs7w&ust=1638507806780000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCW-7KrxPQCFQAAAAAdAAAAABAD',
      properties: [
        {
          key: 'database',
          datatype: 'string',
          property_type: 'node_property',
          _id: '61ade47308d89eda1562865d',
        },
        {
          key: 'collection',
          datatype: 'string',
          property_type: 'node_property',
          _id: '61ade47308d89eda1562865e',
        },
        {
          key: 'username',
          datatype: 'string',
          property_type: 'connection_property',
          _id: '61ade47308d89eda1562865f',
        },
        {
          key: 'password',
          datatype: 'string',
          property_type: 'connection_property',
          _id: '61ade47308d89eda15628660',
        },
        {
          key: 'endpoint',
          datatype: 'string',
          property_type: 'connection_property',
          _id: '61ade47308d89eda15628661',
        },
        {
          key: 'port',
          datatype: 'string',
          property_type: 'connection_property',
          _id: '61ade47308d89eda15628662',
        },
      ],
      status: 'string',
      is_delete: 0,
      created_at: '2021-12-06T10:22:43.919Z',
      updated_at: '2021-12-06T10:22:43.919Z',
      __v: 0,
    },
    {
      _id: '61ade495979713eb91ebfdb9',
      name: 'mysql',
      description: 'string',
      tags: ['mysql', 'db'],
      icon: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoppng.com%2Ffree-image%2F9kib-354x415-unnamed-mongodb-logo-sv-PNG-free-PNG-Images_164419&psig=AOvVaw216eRZgej2WpFHcAfWTs7w&ust=1638507806780000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCW-7KrxPQCFQAAAAAdAAAAABAD',
      properties: [
        {
          key: 'database',
          datatype: 'string',
          property_type: 'node_property',
          _id: '61ade495979713eb91ebfdba',
        },
        {
          key: 'table',
          datatype: 'string',
          property_type: 'node_property',
          _id: '61ade495979713eb91ebfdbb',
        },
        {
          key: 'username',
          datatype: 'string',
          property_type: 'connection_property',
          _id: '61ade495979713eb91ebfdbc',
        },
        {
          key: 'password',
          datatype: 'string',
          property_type: 'connection_property',
          _id: '61ade495979713eb91ebfdbd',
        },
        {
          key: 'endpoint',
          datatype: 'string',
          property_type: 'connection_property',
          _id: '61ade495979713eb91ebfdbe',
        },
        {
          key: 'port',
          datatype: 'string',
          property_type: 'connection_property',
          _id: '61ade495979713eb91ebfdbf',
        },
      ],
      status: 'string',
      is_delete: 0,
      created_at: '2021-12-06T10:23:17.372Z',
      updated_at: '2021-12-06T10:23:17.372Z',
      __v: 0,
    },
  ],
  count: 3,
};

// API Endpoints
// READ
mock
  .onGet(new RegExp(process.env.NX_CONNECTOR_BASE_URL + '/connector'))
  .reply((request) => {
    return [200, onSuccess(connectorDB)];
  });

// CREATE
// mock
//   .onPost(new RegExp(process.env.NX_CONNECTOR_BASE_URL + '/connector'))
//   .reply((request) => {
//     let newData = JSON.parse(request.data);
//     newData = {
//       ...newData,
//       _id: (Math.random() * 100).toString().split('.').join(''),
//       created_at: new Date().toISOString(),
//       updated_at: new Date().toISOString(),
//     };
//     connectorDB.data = [...connectorDB.data, newData];
//     connectorDB.count = connectorDB.data.length;

//     return [200, onSuccess(newData, 'Chart created successfully')];
//   });

// UPDATE
// mock
//   .onPut(
//     new RegExp(process.env.NX_DATA_FLOW_BASE_URL + '/data-flow/' + /[a-z0-9]*/)
//   )
//   .reply((request) => {
//     let newData = JSON.parse(request.data);
//     newData = {
//       ...newData,
//       updated_at: new Date().toISOString(),
//     };

//     return [200, onSuccess(newData, 'Chart updated successfully')];
//   });
