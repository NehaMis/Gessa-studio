import mock from "../mock";
import onSuccess from "../../utils/responseWrapper";
import generateRandomString from "../../utils/randomString";

export interface TransferProps {
  leftList: Array<{
    label: string;
    value: string;
  }>;
  rightList: Array<{
    label: string;
    value: string;
  }>;
  leftListLabel: string;
  rightListLabel: string;
}

let columnOptions = {
  leftList: [
    { label: "displayerror", value: "Type" },
    { label: "displayerror7", value: "Definition" },
    { label: "displayerror8", value: "SQL Query" },
    { label: "displayerror9", value: "Schema" },
  ],
  rightList: [
    { label: "displayerror4", value: "Name" },
    { label: "displayerror5", value: "Created By" },
    { label: "displayerror6", value: "Created On" },
  ],
  leftListLabel: "Available Fields",
  rightListLabel: "Selected Fields",
};

let tableHeaders = [
  ...columnOptions.rightList
];

// API Endpoints
// READ

mock
  .onGet(new RegExp(process.env.NX_DATA_FLOW_BASE_URL + "/columnOption"))
  .reply((request) => {
    return [200, onSuccess(columnOptions)];
  });

// API Endpoints
// READ Table Headers

mock
  .onGet(new RegExp(process.env.NX_DATA_FLOW_BASE_URL + "/tableHeaders"))
  .reply((request) => {
    tableHeaders=[...columnOptions.rightList]
    return [200, onSuccess(tableHeaders)];
  });

// CREATE
mock
  .onPost(new RegExp(process.env.NX_DATA_FLOW_BASE_URL + "/columnOption"))
  .reply((request) => {
    let newData = JSON.parse(request.data);
    columnOptions = { ...columnOptions, ...newData };
    return [200, onSuccess(columnOptions, "Columns Changed Successfully")];
  });
