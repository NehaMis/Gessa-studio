// Imports
import mock from '../mock';
import onSuccess from '../../utils/responseWrapper';
import generateRandomString from '../../utils/randomString';

// Interfaces

export interface IReport {
  _id: string;
  title: string;
  actions: Array<IReportIcon>;
  rowData: Array<IReportData>;
}

export interface IReportIcon {
  icon: string;
  type: string;
}

export interface IReportData {
  _id: string;
  name: string;
  createdBy: string;
  cretaedOn: string;
  details: IReportDetails;
}

export interface IReportDetails {
  _id: string;
  title: string;
  name: string;
  schema: Array<string>;
  description: string;
  query: string;
}

const reportData = {
  data: [
    {
      _id: '61a853edb27f8425bbddf2be',
      title: 'Report',
      action: [
        {
          icon: 'dsd',
          type: 'Add',
        },
        {
          icon: 'dsd',
          type: 'Filter',
        },
        {
          icon: 'transfer',
          type: 'transfer',
        },
      ],

      rowData: [
        {
          _id: '61a8a781684de3c2649cdd5e',
          name: 'Report 1',
          createdBy: 'Jane Cooper',
          cretaedOn: 'some date',
          details: {
            _id: '61a8a781684de3c2649cdd5e',
            title: 'View Details',
            name: 'Report 1',
            schema: ['schema1', 'schema2'],
            description: 'string',
            query: 'string',
          },
        },
        {
          _id: '61a8a781684de3c2649cdd5e',
          name: 'Report 2',
          createdBy: 'Robert Fox',
          cretaedOn: 'some date',
          details: {
            _id: '61a8a781684de3c2649cdd5e',
            title: 'View Details',
            name: 'Report 2',
            schema: ['schema1', 'schema2'],
            description: 'string',
            query: 'string',
          },
        },
        {
          _id: '61a8a781684de3c2649cdd5e',
          name: 'Report 3',
          createdBy: 'Jhon Fox',
          cretaedOn: 'some date',
          details: {
            _id: '61a8a781684de3c2649cdd5e',
            title: 'View Details',
            name: 'Report 3',
            schema: ['schema1', 'schema2'],
            description: 'string',
            query: 'string',
          },
        },
      ],
    },
  ],
};

// API Endpoints
// READ

mock
  .onGet(new RegExp(process.env.NX_DATA_FLOW_BASE_URL + '/reportData'))
  .reply((request) => {
    return [200, onSuccess(reportData)];
  });
