// Imports
import mock from "../mock";
import onSuccess from "../../utils/responseWrapper";
import generateRandomString from "../../utils/randomString";
import { format } from "date-fns";

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
  createdOn: string;
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
      _id: "61a853edb27f8425bbddf2be",
      title: "Report",
      action: [
        {
          icon: "dsd",
          type: "Add",
        },
        {
          icon: "dsd",
          type: "Filter",
        },
        {
          icon: "transfer",
          type: "transfer",
        },
      ],

      rowData: [
        {
          _id: "61a8a781684de3c2649cdd5e",
          name: "Report 1",
          createdBy: "Jane Cooper",
          createdOn: new Date(),
          details: {
            _id: "61a8a781684de3c2649cdd5e",
            title: "View Details",
            name: "Report 1",
            schema: ["schema1", "schema2", "schema3"],
            description: "string",
            query: "string",
          },
        },
        {
          _id: "61a8a781684de3c2649cdd5e",
          name: "Report 2",
          createdBy: "Robert Fox",
          createdOn: new Date(),
          details: {
            _id: "61a8a781684de3c2649cdd5e",
            title: "View Details",
            name: "Report 2",
            schema: ["schema1", "schema2"],
            description: "string",
            query: "string",
          },
        },
        {
          _id: "61a8a781684de3c2649cdd5e",
          name: "Report 3",
          createdBy: "Jhon Fox",
          createdOn: new Date(),
          details: {
            _id: "61a8a781684de3c2649cdd5e",
            title: "View Details",
            name: "Report 3",
            schema: ["schema1", "schema2", "schema3", "schema4"],
            description: "string",
            query: "string",
          },
        },
      ],
    },
  ],
};

// API Endpoints
// READ

mock
  .onGet(new RegExp(process.env.NX_DATA_FLOW_BASE_URL + "/reportData"))
  .reply((request) => {
    return [200, onSuccess(reportData)];
  });

// CREATE
mock
  .onPost(new RegExp(process.env.NX_DATA_FLOW_BASE_URL + "/reportData"))
  .reply((request) => {
    let requestData = JSON.parse(request.data);

    let newData = {
      _id: generateRandomString(),
      name: requestData.report_name,
      createdBy: "Jane Cooper",
      createdOn: new Date(),
      details: {
        _id: generateRandomString(),
        title: "View Details",
        name: requestData.report_name,
        schema: [...requestData.select_schema],
        description: requestData.def,
        query: requestData.sql,
      },
      // ...newData,
      // _id: generateRandomString(),
    };
    // reportData.data = [...reportData.data, rowData:[...newData]];
    reportData.data[0].rowData.push(newData);

    return [
      200,
      onSuccess(reportData.data[0].rowData, "Report created successfully"),
    ];
  });

mock
  .onPost(new RegExp(process.env.NX_DATA_FLOW_BASE_URL + "/updateQuery"))
  .reply((request) => {
    let requestData = JSON.parse(request.data);
    reportData.data[0].rowData[requestData.index] = {
      ...reportData.data[0].rowData[requestData.index],
      details: {
        ...reportData.data[0].rowData[requestData.index].details,
        query: requestData.query,
      },
    };

    return [
      200,
      onSuccess(reportData.data[0].rowData, "Query Updated successfully"),
    ];
  });
