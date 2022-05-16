import mock from '../mock';
import onSuccess from '../../utils/responseWrapper';
import generateRandomString from '../../utils/randomString';

//Interfaces 

export interface AddReport{
    _id:string;
    reportName:string;
    definition:string;
    schema:Array<string>;
    sqlQuery:string;
}

const addReport={
    data:[
        {
            _id: '61a853edb27f8425bbddf2be',
            reportName:'Report 1',
            definition:'random definition',
            schema:['schema 1', 'schema 2'],
            sqlQuery:'select * from random_table'
        },
    ],
    count:1,
};

// API Endpoints
// READ

mock
  .onGet(new RegExp(process.env.NX_DATA_FLOW_BASE_URL + '/addReport'))
  .reply((request) => {
    return [200, onSuccess(addReport)];
  });

  // CREATE
mock
  .onPost(new RegExp(process.env.NX_DATA_FLOW_BASE_URL + '/addReport'))
  .reply((request) => {
    let newData = JSON.parse(request.data);
    newData = {
      ...newData,
      _id: generateRandomString(),
    };
    addReport.data = [...addReport.data, newData];
    addReport.count = addReport.data.length;

    return [200, onSuccess(newData, 'Report created successfully')];
  });


