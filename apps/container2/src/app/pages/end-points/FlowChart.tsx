import { Card } from '../../components/chart/Card';
import { Card1 } from '@gessa/ui';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/system';
import { updateTab } from '../../../../src/store/endpointStore';
import ReactFlow, {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Edge,
  Elements,
  OnLoadParams,
  useZoomPanHelper,
} from 'react-flow-renderer';
import React, { useState, useEffect, useCallback, DragEvent } from 'react';

const FlowChart = (props: any) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const tabs = useSelector((state: any) => state.endpointData.tabs);
  const activeTab = useSelector((state: any) => state.endpointData.activeTabId);

  const [rfInstance, setRfInstance] = useState<OnLoadParams>();
  const [chartInstance, setChartInstance] = useState<Elements>([]);
  const { transform } = useZoomPanHelper();

  const onConnect = (params: Connection | Edge) => {
    const adt = addEdge(params, chartInstance);
    if (rfInstance) {
      const _serializedChart = serializeChart(rfInstance.toObject());

      // Save to redux store
      const newData = JSON.parse(JSON.stringify(props.tab));
      const index = newData.data.findIndex(
        (value: any) => value.key === 'chart'
      );
      newData.data[index].value = _serializedChart;
      setChartInstance(adt);
      dispatch(updateTab(newData));
    }
  };
  const onElementsRemove = (elementsToRemove: Elements) => {
    // setChartInstance((els) => removeElements(elementsToRemove, els));
  };
  const onDragOver = (event: DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event: DragEvent) => {
    event.preventDefault();
    if (rfInstance) {
      const type: any = JSON.parse(
        event.dataTransfer.getData('application/reactflow')
      );
      const position = rfInstance.project({
        x: event.pageX - 350,
        y: event.pageY - 200,
      });

      const newNode: any = {
        id: type.id,
        position,
        AssociatedForm: type.AssociatedForm,
        type: type.type,

        data: {
          label: (
            <Card1
              icon={type.data.props.icon}
              text={type.data.props.text}
              leftAccent={type.data.props.leftAccent}
              otherData={type.data.props.AssociatedForm}
            />
          ),
        },
      };
      setChartInstance([...chartInstance, newNode]);
      const newData = JSON.parse(JSON.stringify(props.tab));
      const _chartInstance = serializeChart([...chartInstance, newNode]);
      const index = newData.data.findIndex(
        (value: any) => value.key === 'chart'
      );
      newData.data[index].value = _chartInstance;

      dispatch(updateTab(newData));
      //   const nData = JSON.parse(JSON.stringify(props.tab));
    }
  };

  useEffect(() => {
    const newData = JSON.parse(JSON.stringify(props.tab));
    const index = newData.data.findIndex((value: any) => value.key === 'chart');

    // Generate chart data from object
    if (index !== -1) {
      const _chartInstance = deserializeChart(newData.data[index].value);

      // Save to local state
      setChartInstance(_chartInstance);
    }
  }, [dispatch, props.tab]);

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

  const deserializeChart = (chartObject: any, label: any = null): any => {
    const _chartInstance =
      chartObject &&
      chartObject.map((e: any) => {
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
    if (rfInstance) {
      const _serializedChart = serializeChart([
        {
          id: '1',
          type: 'input', // input node
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
          position: { x: 10, y: 10 },
        },
        {
          id: '2',
          data: {
            component: 'div',
            props: { children: 'Default Code' },
          },
          position: { x: 80, y: 265 },
        },
        { id: 'e1-2', source: '1', target: '2', animated: true },
      ]);

      // Save to redux store
      const newData = JSON.parse(JSON.stringify(props.tab));
      newData.data[1].value = _serializedChart;
      // dispatch(updateTab(newData));
    }
  }, [rfInstance, props.tab, dispatch]);

  const restoreChart = useCallback(() => {
    const chartObj = JSON.parse(
      JSON.stringify(
        props.tab.data.filter((e: any) => e.key === 'chart')[0].value
      )
    );

    // Generate chart data from object
    const _chartInstance = deserializeChart(chartObj, 'Potato');

    // Save to local state
    // setChartInstance(_chartInstance);
    // const obj: any = { x: 0, y: 0, zoom: 0 };
    // transform(obj);
  }, [props.tab]);

  const onLoad = (rfInstance: any) => {
    setRfInstance(rfInstance);
  };

  const onElementClick = (event: any, element: any) => {
    // props.onItemClick(element);
    if (rfInstance) {
      serializeChart(rfInstance.toObject());
    }
  };

  return (
    <>
      {chartInstance && (
        <div className="flex gap-2 mt-2 flex-row flex-grow  rounded w-full p-2 h-5/6">
          <ReactFlow
            elements={chartInstance}
            onConnect={onConnect}
            onElementsRemove={onElementsRemove}
            onLoad={onLoad}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onElementClick={onElementClick}
          >
            <Background
              variant={BackgroundVariant.Dots}
              style={{ color: '#c8c8c8' }}
              gap={15}
              size={1}
            />
            <Controls />
          </ReactFlow>
        </div>
      )}

      <div className="flex gap-2 mt-2 flex-row flex-grow  border border-gray-400 rounded w-full p-2 h-1/6">
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

export default FlowChart;
