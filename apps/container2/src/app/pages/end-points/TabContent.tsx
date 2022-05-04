import { Card1, IconBar } from '@gessa/ui';
import { Button, Drawer } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/system';
import { updateTab } from '../../../../src/store/endpointStore';
import { ReactFlowProvider } from 'react-flow-renderer';
import React, { useState, useEffect, DragEvent } from 'react';
import Sidebar from '../data-flow/Sidebar';
import * as Yup from 'yup';
import FlowChart from './FlowChart';

// const cardElements = [
//   {
//     id: '3',
//     type: 'input', // input node
//     data: {
//       component: 'Card1',
//       props: {
//         icon: {
//           name: 'Menu-Info',
//           size: 30,
//           color: '#ffffff',
//           label: 'Menu-Info',
//         },
//         leftAccent: '',
//         text: '',
//       },
//     },
//     position: { x: 100, y: 365 },
//     AssociatedForm: [
//       {
//         type: 'text',
//         value: ['endpoint username3'],
//         name: 'userName',
//         label: 'Name',
//         placeholder: 'Enter Name',
//         options: [],
//         required: true,
//         validation: [],
//       },
//       {
//         type: 'select',
//         name: 'connectorName',
//         value: ['connector4'],
//         label: 'Connector Name',
//         placeholder: 'Select Connector',
//         options: [
//           { value: 'connector1', label: 'connector1' },
//           { value: 'connector2', label: 'connector2' },
//           { value: 'connector3', label: 'connector3' },
//           { value: 'connector4', label: 'connector4' },
//         ],
//         required: true,
//         validation: [],
//       },
//       {
//         type: 'select',
//         name: 'connectorType',
//         value: ['input'],
//         label: 'Connector Type',
//         placeholder: 'Select Connector Type ',
//         options: [
//           { value: 'input', label: 'input' },
//           { value: 'store', label: 'store' },
//         ],
//         required: true,
//         validation: [],
//       },
//       {
//         type: 'text',
//         value: ['endpoint dataframe name'],
//         label: 'Data Frame Name',
//         name: 'dataFrameName',
//         placeholder: 'Enter Frame Name',
//         options: [],
//         required: true,
//         validation: [],
//       },
//     ],
//   },
//   {
//     id: '3',
//     type: 'input', // input node
//     data: {
//       component: 'Card1',
//       props: {
//         icon: {
//           name: 'Menu-Mysql',
//           size: 30,
//           color: '#ffffff',
//           label: 'Menu-Mysql',
//         },
//         leftAccent: '',
//         text: '',
//       },
//     },
//     position: { x: 100, y: 365 },
//     AssociatedForm: [
//       {
//         type: 'text',
//         value: ['endpoint username3'],
//         name: 'userName',
//         label: 'Name',
//         placeholder: 'Enter Name',
//         options: [],
//         required: true,
//         validation: [],
//       },
//       {
//         type: 'select',
//         name: 'connectorName',
//         value: ['connector4'],
//         label: 'Connector Name',
//         placeholder: 'Select Connector',
//         options: [
//           { value: 'connector1', label: 'connector1' },
//           { value: 'connector2', label: 'connector2' },
//           { value: 'connector3', label: 'connector3' },
//           { value: 'connector4', label: 'connector4' },
//         ],
//         required: true,
//         validation: [],
//       },
//       {
//         type: 'select',
//         name: 'connectorType',
//         value: ['input'],
//         label: 'Connector Type',
//         placeholder: 'Select Connector Type ',
//         options: [
//           { value: 'input', label: 'input' },
//           { value: 'store', label: 'store' },
//         ],
//         required: true,
//         validation: [],
//       },
//       {
//         type: 'text',
//         value: ['endpoint dataframe name'],
//         label: 'Data Frame Name',
//         name: 'dataFrameName',
//         placeholder: 'Enter Frame Name',
//         options: [],
//         required: true,
//         validation: [],
//       },
//     ],
//   },
//   {
//     id: '5',
//     type: 'store', // input node
//     data: {
//       component: 'Card1',
//       props: {
//         icon: {
//           name: 'Menu-Postgres',
//           size: 30,
//           color: '#ffffff',
//           label: 'Menu-Postgres',
//         },
//         leftAccent: '',
//         text: '',
//       },
//     },
//     position: { x: 150, y: 400 },
//     AssociatedForm: [
//       {
//         type: 'text',
//         value: ['endpoint username55'],
//         name: 'userName',
//         label: 'Name',
//         placeholder: 'Enter Name',
//         options: [],
//         required: true,
//         validation: [],
//       },
//       {
//         type: 'select',
//         name: 'connectorName',
//         value: ['connector4'],
//         label: 'Connector Name',
//         placeholder: 'Select Connector',
//         options: [
//           { value: 'connector1', label: 'connector1' },
//           { value: 'connector2', label: 'connector2' },
//           { value: 'connector3', label: 'connector3' },
//           { value: 'connector4', label: 'connector4' },
//         ],
//         required: true,
//         validation: [],
//       },
//       {
//         type: 'select',
//         name: 'connectorType',
//         value: ['store'],
//         label: 'Connector Type',
//         placeholder: 'Select Connector Type ',
//         options: [
//           { value: 'input', label: 'input' },
//           { value: 'store', label: 'store' },
//         ],
//         required: true,
//         validation: [],
//       },
//       {
//         type: 'text',
//         value: ['endpoint dataframe name'],
//         label: 'Data Frame Name',
//         name: 'dataFrameName',
//         placeholder: 'Enter Frame Name',
//         options: [],
//         required: true,
//         validation: [],
//       },
//     ],
//   },
//   {
//     id: '5',
//     type: 'store', // input node
//     data: {
//       component: 'Card1',
//       props: {
//         icon: {
//           name: 'Menu-Transform',
//           size: 30,
//           color: '#ffffff',
//           label: 'Menu-Transform',
//         },
//         leftAccent: '',
//         text: '',
//       },
//     },
//     position: { x: 150, y: 400 },
//     AssociatedForm: [
//       {
//         type: 'text',
//         value: ['endpoint username55'],
//         name: 'userName',
//         label: 'Name',
//         placeholder: 'Enter Name',
//         options: [],
//         required: true,
//         validation: [],
//       },
//       {
//         type: 'select',
//         name: 'connectorName',
//         value: ['connector4'],
//         label: 'Connector Name',
//         placeholder: 'Select Connector',
//         options: [
//           { value: 'connector1', label: 'connector1' },
//           { value: 'connector2', label: 'connector2' },
//           { value: 'connector3', label: 'connector3' },
//           { value: 'connector4', label: 'connector4' },
//         ],
//         required: true,
//         validation: [],
//       },
//       {
//         type: 'select',
//         name: 'connectorType',
//         value: ['store'],
//         label: 'Connector Type',
//         placeholder: 'Select Connector Type ',
//         options: [
//           { value: 'input', label: 'input' },
//           { value: 'store', label: 'store' },
//         ],
//         required: true,
//         validation: [],
//       },
//       {
//         type: 'text',
//         value: ['endpoint dataframe name'],
//         label: 'Data Frame Name',
//         name: 'dataFrameName',
//         placeholder: 'Enter Frame Name',
//         options: [],
//         required: true,
//         validation: [],
//       },
//     ],
//   },
//   {
//     id: '5',
//     type: 'store', // input node
//     data: {
//       component: 'Card1',
//       props: {
//         icon: {
//           name: 'Menu-RabbitMQ',
//           size: 30,
//           color: '#ffffff',
//           label: 'Menu-RabbitMQ',
//         },
//         leftAccent: '',
//         text: '',
//       },
//     },
//     position: { x: 150, y: 400 },
//     AssociatedForm: [
//       {
//         type: 'text',
//         value: ['endpoint username55'],
//         name: 'userName',
//         label: 'Name',
//         placeholder: 'Enter Name',
//         options: [],
//         required: true,
//         validation: [],
//       },
//       {
//         type: 'select',
//         name: 'connectorName',
//         value: ['connector4'],
//         label: 'Connector Name',
//         placeholder: 'Select Connector',
//         options: [
//           { value: 'connector1', label: 'connector1' },
//           { value: 'connector2', label: 'connector2' },
//           { value: 'connector3', label: 'connector3' },
//           { value: 'connector4', label: 'connector4' },
//         ],
//         required: true,
//         validation: [],
//       },
//       {
//         type: 'select',
//         name: 'connectorType',
//         value: ['store'],
//         label: 'Connector Type',
//         placeholder: 'Select Connector Type ',
//         options: [
//           { value: 'input', label: 'input' },
//           { value: 'store', label: 'store' },
//         ],
//         required: true,
//         validation: [],
//       },
//       {
//         type: 'text',
//         value: ['endpoint dataframe name'],
//         label: 'Data Frame Name',
//         name: 'dataFrameName',
//         placeholder: 'Enter Frame Name',
//         options: [],
//         required: true,
//         validation: [],
//       },
//     ],
//   },
// ];

const validationSchema = Yup.object().shape({
  userName: Yup.string().required('User Name is required'),
  connectorName: Yup.string().required('Connector Name is required'),
  connectorType: Yup.string(),
  dataFrameName: Yup.string().required('data frame required'),
  chooseDataFrame: Yup.string(),
});

const TabContent = (props: any) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const tabs = useSelector((state: any) => state.endpointData.tabs);
  const activeTab = useSelector((state: any) => state.endpointData.activeTabId);

  const [formInstance, setFormInstance] = useState<any>();
  const [formvalidationSchema, setValidationSchema] = useState<any>();
  const [chartSelected, setchartSelected] = useState<any>();

  const handleSidebarToggle = (tab?: any) => {
    const newData = JSON.parse(JSON.stringify(props.tab));
    newData.sidebar = !newData.sidebar;
    dispatch(updateTab(newData));
  };

  const onDragStart = (event: DragEvent, nodeType: any) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const ItemClickHandler = (data: any) => {
    const newData = JSON.parse(JSON.stringify(props.tab));
    const formIndex = newData.data.findIndex(
      (value: any) => value.key === 'chart'
    );
    if (formIndex !== -1) {
      const tempDataIndex = newData.data[formIndex].value.findIndex(
        (value: any) => value.id === data.id
      );
      // if (tempDataIndex) {
      setFormInstance(
        newData.data[formIndex].value[tempDataIndex].AssociatedForm
      );
      setValidationSchema(
        serilizeValidationSchema(
          newData.data[formIndex].value[tempDataIndex].AssociatedForm
        )
      );

      setchartSelected(data);
      newData.sidebar = !newData.sidebar;
      if (newData.sidebar) {
        newData.chartSelectedForFormData = data.id;
      }
      dispatch(updateTab(newData));
      // }
    } else {
      //do nothing
    }
  };

  const serilizeValidationSchema = (formData: any) => {
    const validationObjFinal: any = {};
    const arr = [];
    for (let i = 0; i < formData.length; i += 1) {
      const payload: any = [];
      payload[formData[i].validation.name] = Yup.string();
      if (formData[i].validation.required) {
        payload[formData[i].validation.name] = Yup.string().required();
      }
      if (
        formData[i].validation.required &&
        formData[i].validation.errorMessage
      ) {
        payload[formData[i].validation.name] = Yup.string().required(
          formData[i].validation.errorMessage
        );
      }
    }
    return validationObjFinal;
  };

  const serializeChart = (chartInstance: any) => {
    const _chartObject =
      chartInstance &&
      chartInstance.length &&
      chartInstance.map((e: any) => {
        const obj = {
          ...e,
        };
        if (React.isValidElement(e?.data?.label)) {
          obj.data = {
            component: e.data.label.type.name || e.data.label.type,
            props: e.data.label.props,
          };
        } else {
          // Do nothing
        }

        return obj;
      });

    return _chartObject;
  };

  const getupdatedFormDataHandler = (data: any) => {
    // setFormInstance(data);
    const newData = JSON.parse(JSON.stringify(props.tab));
    const formIndex = newData.data.findIndex(
      (value: any) => value.key === 'chart'
    );
    if (formIndex !== -1) {
      const tempData = newData.data[formIndex];
      // if (!chartSelected) {
      //   setchartSelected({ id: newData.chartSelectedForFormData });
      // }

      const itemIndex = newData.data[formIndex].value.findIndex(
        (value: any) => value.id === chartSelected.id
      );
      for (
        let i = 0;
        i < tempData.value[itemIndex].AssociatedForm.length;
        i += 1
      ) {
        tempData.value[itemIndex].AssociatedForm[i].value = [
          data[tempData.value[itemIndex].AssociatedForm[i].name],
        ];
        tempData.value[itemIndex].data.props.leftAccent = '#F7B81D';
        tempData.value[itemIndex].data.props.text = data.userName;
      }

      if (data.connectorType === 'store') {
        const inputArray = tempData.value.filter(
          (value: any) => value.id !== newData.chartSelectedForFormData
        );

        if (inputArray.length > 0) {
          // for (let i = 0; i < inputArray.length; i += 1) {
          const connectedEdge = {
            id: Math.random().toString(),
            source: newData.chartSelectedForFormData,
            target: data.chooseDataFrame || inputArray[0].id,
            type: 'custom', // smooth edge
          };
          tempData.value.push(connectedEdge);
          // }
        }
      }
      setFormInstance(newData.data[formIndex].value[itemIndex].AssociatedForm);
      newData.sidebar = !newData.sidebar;

      dispatch(updateTab(newData));
    }
  };
  useEffect(() => {
    const newData = JSON.parse(JSON.stringify(props.tab));
    const formIndex = newData.data.findIndex(
      (value: any) => value.key === 'chart'
    );
    const optionArray: Array<any> = [];
    if (formIndex !== -1) {
      const tempDataIndex =
        newData.data[formIndex].value &&
        newData.data[formIndex].value.findIndex(
          (value: any) => value.id === newData.chartSelectedForFormData
        );
      if (tempDataIndex !== -1 && newData.sidebar) {
        const getInputTypeArray = newData.data[formIndex].value.filter(
          (value: any) =>
            value.id !== newData.chartSelectedForFormData &&
            value.type === 'source'
        );

        for (let i = 0; i < getInputTypeArray.length; i += 1) {
          const payload = {
            label: getInputTypeArray[i].data.props.text,
            value: getInputTypeArray[i].id,
          };
          optionArray.push(payload);
        }

        const getStoreTypeArray = newData.data[formIndex].value.filter(
          (value: any) =>
            value.id !== newData.chartSelectedForFormData &&
            value.type === 'store'
        );
        for (let i = 0; i < getStoreTypeArray.length; i += 1) {
          const index = getStoreTypeArray[i].AssociatedForm.findIndex(
            (value: any) => value.name === 'chooseDataFrame'
          );
          if (index !== -1) {
            newData.data[formIndex].value[tempDataIndex].AssociatedForm[
              index
            ].options = optionArray;
          }
        }

        setFormInstance(
          newData.data[formIndex].value[tempDataIndex].AssociatedForm
        );
        setchartSelected({ id: newData.chartSelectedForFormData });
      }
    } else {
      //do nothing
    }
  }, [dispatch, props.tab, formvalidationSchema]);

  const closeDrawerEvent = (data: boolean) => {
    if (data) {
      props.tab.sidebar = !props.tab.sidebar;
    }
  };

  return (
    <div
      key={1}
      className="relative flex flex-col flex-grow h-screen"
      style={{ backgroundColor: theme.palette.background.paper }}
    >
      <div
        className="p-2 flex flex-row justify-between items-center gap-2"
        style={{
          width: '100%',
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <div
          className=" flex flex-col justify-start items-center h-12 top-4 p-1 w-auto absolute left-4 z-10 rounded"
          style={{
            backgroundColor: theme.palette.primary.main,
            height: 'auto',
          }}
        >
          {tabs &&
            tabs.length &&
            tabs[0].data &&
            tabs[0].data.length &&
            tabs[0].data[0].value &&
            tabs[0].data[0].value.map((card1: any) => {
              return (
                <div
                  key={Math.random()}
                  className=""
                  onDragStart={(event: DragEvent) =>
                    onDragStart(
                      event,
                      JSON.stringify({ ...card1, id: Math.random().toString() })
                    )
                  }
                  draggable
                >
                  <Card1
                    icon={card1.data.props.icon}
                    text={card1.data.props.text}
                    leftAccent={card1.data.props.leftAccent}
                  />
                </div>
              );
            })}
        </div>
        {props.tab && (
          <div
            className="flex flex-col justify-between items-start w-full h-full"
            style={{
              backgroundColor: theme.palette.background.default,
              height: '800px',
            }}
          >
            <ReactFlowProvider>
              <FlowChart tab={props.tab} onItemClick={ItemClickHandler} />
            </ReactFlowProvider>
          </div>
        )}
        {/* {props.tab.sidebar && (
          <div className="absolute  right-4 top-0 bottom-0">
            <div className="relative z-10">
              <Sidebar
                formdata={formInstance}
                validationSchema={validationSchema}
                getUpdatedFormData={getupdatedFormDataHandler}
              />
            </div>
          </div>
        )} */}
        <Drawer
          anchor={'right'}
          open={props.tab.sidebar}
          onClose={handleSidebarToggle}
          className="w-96 h-full flex flex-col flex-grow"
        >
          <div className="h-full bg-red-300">
            <Sidebar
              formdata={formInstance}
              validationSchema={validationSchema}
              getUpdatedFormData={getupdatedFormDataHandler}
              closeDrawerSidebar={handleSidebarToggle}
            />
          </div>
          {/* <div>
            <IconBar />
          </div> */}
        </Drawer>
      </div>
    </div>
  );
};

export default TabContent;
