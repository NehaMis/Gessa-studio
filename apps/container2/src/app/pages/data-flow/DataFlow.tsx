import {
  removeTab,
  setActiveTab,
  updateTab,
  updateData,
} from '../../../../src/store/tabsStore';
import React, { useState, useEffect, useCallback, DragEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/system';
import { Close, Circle } from '@mui/icons-material';
import Navbar2 from '../../components/navbar2/navbar2';
import { Button } from '@mui/material';
import Sidebar from './Sidebar';
import ReactFlow, {
  addEdge,
  Connection,
  Edge,
  Elements,
  OnLoadParams,
  ReactFlowProvider,
  removeElements,
  useZoomPanHelper,
} from 'react-flow-renderer';
import { ShowChart } from '../../components/chart/ShowChart';
import { Card } from '../../components/chart/Card';
import Image from '../../components/chart/dataflow_number.svg';
import ReactForm from './reactForm';
import * as Yup from 'yup';
import { Card1 } from '@gessa/ui';
import { initialState } from 'react-flow-renderer/dist/store';
import Drawer from '@mui/material/Drawer';

const cardElements = [
  {
    icon: {
      name: 'Bell',
      size: 40,
      color: '#459ff2',
      label: 'Bell',
    },
    // leftAccent: 'green',
    // text: 'Input',
  },
  {
    icon: {
      name: 'Preview',
      size: 40,
      color: '#459ff2',
      label: 'Preview',
    },
    // leftAccent: 'green',
    // text: 'Store',
  },
];

const myform = [
  {
    type: 'text',
    value: [],
    name: 'userName',
    label: 'Name',
    placeholder: 'Enter Name',
    options: [],
    required: true,
    validation: [],
  },
  {
    type: 'select',
    name: 'connectorName',
    value: [],
    label: 'Connector Name',
    placeholder: 'Select Connector',
    options: [
      { value: 'connector1', label: 'connector1' },
      { value: 'connector2', label: 'connector2' },
      { value: 'connector3', label: 'connector3' },
      { value: 'connector4', label: 'connector4' },
    ],
    required: true,
    validation: [],
  },
  {
    type: 'select',
    name: 'connectorType',
    value: [],
    label: 'Connector Type',

    placeholder: 'Select Connector Type ',
    options: [
      { value: 'ctyp1', label: 'ctype1' },
      { value: 'ctyp2', label: 'ctype2' },
      { value: 'ctyp3', label: 'ctype3' },
      { value: 'ctyp4', label: 'ctype4' },
      { value: 'ctyp5', label: 'ctype5' },
      { value: 'ctyp6', label: 'ctype6' },
    ],
    required: true,
    validation: [],
  },
  {
    type: 'text',
    value: [],
    label: 'Data Frame Name',
    name: 'dataFrameName',
    placeholder: 'Enter Frame Name',
    options: [],
    required: true,
    validation: [],
  },
];

const validationSchema = Yup.object().shape({
  userName: Yup.string().required('User Name is required'),
  connectorName: Yup.string().required('Connector Name is required'),
  connectorType: Yup.string(),
  dataFrameName: Yup.string(),
});
const initialElements = [
  {
    id: '1',
    type: 'input',
    data: { label: <Card1 {...cardElements[0]} /> },
    position: { x: 250, y: 5 },
  },
];

const FlowChart = (props: any) => {
  const dispatch = useDispatch();
  const [rfInstance, setRfInstance] = useState<OnLoadParams>();
  const [chartInstance, setChartInstance] = useState<Elements>(initialElements);
  const { transform } = useZoomPanHelper();

  const onConnect = (params: Connection | Edge) => {
    setChartInstance((els) => addEdge(params, els));
    if (rfInstance) {
      const _serializedChart = serializeChart(rfInstance.toObject());

      // Save to redux store
      const newData = JSON.parse(JSON.stringify(props.tab));
      const index = newData.data.findIndex(
        (value: any) => value.key === 'chart'
      );
      newData.data[index].value = _serializedChart;
      dispatch(updateTab(newData));
    }
  };
  const onElementsRemove = (elementsToRemove: Elements) => {
    setChartInstance((els) => removeElements(elementsToRemove, els));
  };
  const onDragOver = (event: DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };
  // const onLoad = (_reactFlowInstance: OnLoadParams) => {
  //   setRfInstance(_reactFlowInstance);
  // };

  const onDrop = (event: DragEvent) => {
    event.preventDefault();

    if (rfInstance) {
      const type: any = JSON.parse(
        event.dataTransfer.getData('application/reactflow')
      );
      const position = rfInstance.project({
        x: event.clientX - 100,
        y: event.clientY - 100,
      });
      const newNode: any = {
        id: Math.random().toString(),
        position,
        data: {
          label: (
            <Card1
              icon={type.props.icon}
              text={type.props.text}
              leftAccent={type.props.leftAccent}
            />
          ),
        },
      };

      setChartInstance([...chartInstance, newNode]);
      if (rfInstance) {
        const _serializedChart = serializeChart(rfInstance.toObject());

        // Save to redux store
        const newData = JSON.parse(JSON.stringify(props.tab));
        const index = newData.data.findIndex(
          (value: any) => value.key === 'chart'
        );
        newData.data[index].value = _serializedChart;
        dispatch(updateTab(newData));
      }
    }
  };

  useEffect(() => {
    // Fetch Chart object from store
    const chartObj = JSON.parse(
      JSON.stringify(
        props.tab.data.filter((e: any) => e.key === 'chart')[0].value
      )
    );

    // Generate chart data from object
    const _chartInstance = deserializeChart(chartObj);

    // Save to local state
    setChartInstance(_chartInstance);
  }, []);

  const serializeChart = (chartInstance: any) => {
    // const _chartInstance = JSON.parse(JSON.stringify(chartInstance));

    const _chartObject = chartInstance.elements.map((e: any) => {
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

  const deserializeChart = (chartObject: any, label: any = null): any => {
    const _chartInstance = chartObject.map((e: any) => {
      if (e?.data?.component) {
        switch (e.data.component) {
          case 'Card':
            e.data = {
              label: <Card {...e.data.props}>{e.data.props.children}</Card>,
            };
            break;
          case 'Card1':
            e.data = { label: <Card1 {...e.data.props} /> };
            break;

          case 'div':
            e.data = {
              label: (
                <div {...e.data.props}>
                  {label ? label : e.data.props.children}
                </div>
              ),
            };
        }
      } else {
        // do nothing
      }

      return e;
    });

    return _chartInstance;
  };

  const saveChart = useCallback(() => {
    // Get serialized chart
    // @ts-ignore
    const _serializedChart = serializeChart(rfInstance.toObject());

    // Save to redux store
    const newData = JSON.parse(JSON.stringify(props.tab));
    newData.data[1].value = _serializedChart;
    dispatch(updateTab(newData));
  }, [rfInstance, props.tab, dispatch]);

  const restoreChart = useCallback(() => {
    // Fetch Chart object from store
    const chartObj = JSON.parse(
      JSON.stringify(
        props.tab.data.filter((e: any) => e.key === 'chart')[0].value
      )
    );

    // Generate chart data from object
    const _chartInstance = deserializeChart(chartObj, 'Potato');

    // Save to local state
    setChartInstance(_chartInstance);
    // const obj: any = { x: 0, y: 0, zoom: 0 };
    // transform(obj);
  }, [props.tab]);

  const onLoad = (rfInstance: any) => {
    setRfInstance(rfInstance);
  };

  const onElementClick = (event: any, element: any) =>
    props.onItemClick(element);

  return (
    <>
      {/* @ts-ignore */}

      {chartInstance && (
        <ReactFlow
          elements={chartInstance}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          onLoad={setRfInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onElementClick={onElementClick}
        />
      )}

      <div className="flex gap-2 mt-2">
        <Button variant="outlined" onClick={saveChart}>
          Save Chart
        </Button>
        <Button variant="contained" onClick={restoreChart}>
          Restore Chart
        </Button>
      </div>
    </>
  );
};

const TabContent = ({ tab }: any) => {
  const dispatch = useDispatch();
  const [formInstance, setFormInstance] = useState(myform);
  const [itemSelected, setItemSelected] = useState<any>();

  const getupdatedFormDataHandler = (data: any) => {
    setFormInstance(data);
    const newData = JSON.parse(JSON.stringify(tab));
    const formIndex = newData.data.findIndex(
      (value: any) => value.key === 'chart'
    );
    if (formIndex !== -1) {
      if (itemSelected) {
        const itemIndex = newData.data[formIndex].value.findIndex(
          (value: any) => value.id === itemSelected.id
        );
        if (itemIndex !== -1) {
          newData.data[formIndex].value[itemIndex].data.props = {
            ...newData.data[formIndex].value[itemIndex].data.props,
            ...{
              text: data.userName,
            },
          };
          dispatch(updateTab(newData));
          handleSidebarToggle(tab);
        }
      }
    }

    //   if (formIndex !== -1) {
    //     const tempData = newData.data[formIndex];
    //     for (let i = 0; i < tempData.value.length; i += 1) {
    //       tempData.value[i].value = [data[tempData.value[i].name]];
    //     }
    //     setFormInstance(tempData.value);
    //     dispatch(updateTab(newData));
    //     handleSidebarToggle(tab);
    // }
  };

  const handleFormChange = (e: any, tab: any) => {
    const newData = JSON.parse(JSON.stringify(tab));
    newData.data[0].value = e.target.value;
    newData.unsaved = true;

    dispatch(updateTab(newData));
  };

  const handleFormSave = (tab: any) => {
    const newData = JSON.parse(JSON.stringify(tab));
    newData.unsaved = false;
    dispatch(updateTab(newData));
  };

  const handleSidebarToggle = (tab: any) => {
    const newData = JSON.parse(JSON.stringify(tab));
    newData.sidebar = !newData.sidebar;

    dispatch(updateTab(newData));
  };

  useEffect(() => {
    // const newData = JSON.parse(JSON.stringify(tab));
    // const formIndex = newData.data.findIndex(
    //   (value: any) => value.key === 'formdata'
    // );
    // if (formIndex !== -1) {
    //   const tempData = newData.data[formIndex];
    //   //   tempData.value = ;
    //   setFormInstance(tempData.value);
    // }
    const newData = JSON.parse(JSON.stringify(tab));
    const formIndex = newData.data.findIndex(
      (value: any) => value.key === 'chart'
    );
    if (formIndex !== -1) {
      const tempDataIndex = newData.data[formIndex].value.findIndex(
        (value: any) => value.id === '1'
      );
      setFormInstance(newData.data[formIndex].value[tempDataIndex]);
      // newData.sidebar = !newData.sidebar;

      // dispatch(updateTab(newData));
    } else {
      //do nothing
    }
  }, []);
  const onDragStart = (event: DragEvent, nodeType: any) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    const obb = event.dataTransfer.getData('application/reactflow');
    event.dataTransfer.effectAllowed = 'move';
  };

  const ItemClickHandler = (data: any) => {
    const newData = JSON.parse(JSON.stringify(tab));
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
      setItemSelected(data);
      newData.sidebar = !newData.sidebar;
      dispatch(updateTab(newData));
      // }
    } else {
      //do nothing
    }
  };

  return (
    <div key={1} className="relative">
      <TextField
        className="w-full"
        id="filled-basic"
        label={tab.title}
        variant="filled"
        value={tab.data[0].value}
        onInput={(input) => handleFormChange(input, tab)}
      />

      <div className="flex gap-2 mt-2">
        <Button variant="outlined" onClick={() => handleFormSave(tab)}>
          Save
        </Button>
        <Button variant="contained" onClick={() => handleSidebarToggle(tab)}>
          {tab.sidebar ? 'Hide Sidebar' : 'Show Sidebar'}
        </Button>
      </div>

      <div
        className="border border-gray-800 rounded mt-2 p-2 flex flex-row justify-between items-center gap-5"
        style={{ width: '100%', height: '520px' }}
      >
        <div className=" flex flex-col justify-start items-center h-96 border border-gray-800 rounded w-1/5 p-2">
          {cardElements &&
            cardElements.map((card1: any) => {
              return (
                <div
                  className=" mb-5 "
                  onDragStart={(event: DragEvent) =>
                    onDragStart(
                      event,
                      // card1.text
                      JSON.stringify(
                        <Card1
                          icon={card1.icon}
                          text={card1.text}
                          leftAccent={card1.leftAccent}
                        />
                      )
                    )
                  }
                  draggable
                >
                  <Card1
                    icon={card1.icon}
                    text={card1.text}
                    leftAccent={card1.leftAccent}
                  />
                </div>
              );
            })}
        </div>
        <div className="  flex flex-col justify-between items-start h-96 border border-gray-800 rounded w-4/5 p-2">
          <ReactFlowProvider>
            <FlowChart tab={tab} onItemClick={ItemClickHandler} />
          </ReactFlowProvider>
        </div>
      </div>

      {tab.sidebar && (
        <div className="absolute  right-4 top-4">
          <div className="fixed right-4 top-4">
            <Sidebar
              formdata={formInstance}
              validationSchema={validationSchema}
              getUpdatedFormData={getupdatedFormDataHandler}
              closeDrawerSidebar={handleSidebarToggle(tab)}
            />
            {/* <React.Fragment key={'right'}>
              <Drawer anchor={'right'} />
            </React.Fragment> */}
          </div>
          {/* <div> */}
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

const TabsContainer = () => {
  const theme = useTheme();
  // const [activeTab, setActiveTab] = useState(0);

  const dispatch = useDispatch();

  const tabs = useSelector((state: any) => state.tabs.tabs);
  const activeTab = useSelector((state: any) => state.tabs.activeTabId);

  const handleTabClose = (tab: any, e: any) => {
    e.stopPropagation();
    dispatch(removeTab(tab));
  };

  return (
    <div className="flex-1">
      <div className="flex">
        {tabs.map((tab: any) => (
          <div
            onClick={() => dispatch(setActiveTab(tab.id))}
            className="cursor-pointer h-12 w-40 flex justify-between items-center pl-3 pr-3 text-sm"
            style={{
              backgroundColor:
                tab.id === activeTab
                  ? theme.palette.mode === 'dark'
                    ? theme.palette.primary['200']
                    : theme.palette.primary['100']
                  : null,
            }}
            key={tab.id}
          >
            <p className="truncate mr-3">{tab.title}</p>
            {tab.unsaved ? (
              <Circle className="h-3" onClick={(e) => alert('Save first')} />
            ) : (
              <Close className="h-4" onClick={(e) => handleTabClose(tab, e)} />
            )}
          </div>
        ))}
      </div>
      <div className="p-4">
        {tabs
          .filter((tab: any) => tab.id === activeTab)
          .map((tab: any) => (
            <TabContent tab={tab} key={tab.id} />
          ))}
      </div>
    </div>
  );
};

const DataFlow = () => {
  const getupdatedFormDataHandler = () => {};
  return (
    <div>
      <div className="flex w-full">
        <Navbar2 />
        <TabsContainer />
      </div>
      {/* <div>
        <ReactForm
          formData={myform}
          validationSchema={validationSchema}
          getNewFormData={getupdatedFormDataHandler}
        />
      </div> */}
    </div>
  );
};

export default DataFlow;
