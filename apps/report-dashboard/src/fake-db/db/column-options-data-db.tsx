import mock from "../mock";
import onSuccess from "../../utils/responseWrapper";
import generateRandomString from "../../utils/randomString";

export interface TransferProps {
  data:Array<TransferHeaders>
}
export interface TransferHeaders{
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

const columnOptions = {
  data: [
    {
      leftList: [
        { label: "query", value: "schema" },
      ],
      rightList: [
        { label: "name", value: "name" },
        { label: "createdBy", value: "createdBy" },
        { label: "createdOn", value: "createdOn" },
      ],
      leftListLabel: "Available Fields",
      rightListLabel: "Selected Fields",
    }
  ]
};

let tableHeaders = [
  ...columnOptions.data[0].rightList
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
    tableHeaders = [...columnOptions.data[0].rightList]
    return [200, onSuccess(tableHeaders)];
  });

// CREATE
mock
  .onPost(new RegExp(process.env.NX_DATA_FLOW_BASE_URL + "/columnOption"))
  .reply((request) => {
    let newData = JSON.parse(request.data);
    let newObject={
      leftList:newData.leftList,
      rightList:newData.rightList,
      leftListLabel: "Available Fields",
      rightListLabel: "Selected Fields",
    }
    columnOptions.data[0]={...newObject} ;
    return [200, onSuccess(columnOptions, "Columns Changed Successfully")];
  })
  ;
