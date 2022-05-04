import { Card1 } from '@gessa/ui';
import ReactFlow, {
  addEdge,
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Edge,
  Elements,
  OnLoadParams,
  ReactFlowProvider,
  removeElements,
} from 'react-flow-renderer';
import { styled } from '@mui/system';
import { useTheme } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, DragEvent } from 'react';
import { nodeTypes } from './customNodes';

/* eslint-disable-next-line */
export interface ChartBoxProps {
  data?: Array<any>;
  sendChartData?: any;
  elementClicked?: any;
  addNewNode?: any;
  deleteNode?: any;
}

const StyledChartBox = styled('div')(({ theme }) => {
  return {
    '&': {
      backgroundColor: theme.palette.background.paper,
    },
  };
});

export function ChartBox(props: ChartBoxProps) {
  const theme = useTheme();
  const [rfInstance, setRfInstance] = useState<OnLoadParams>();
  const [elements, setElements] = useState<Elements>([]);

  const onConnect = (params: Connection | Edge) => {
    setElements((els) => addEdge(params, els));
  };

  const onElementsRemove = (elementsToRemove: any) => {
    // setElements((els) => removeElements(elementsToRemove, els));
    if (elementsToRemove && elementsToRemove.length) {
      const index = elements.findIndex(
        (value: any) => value.id === elementsToRemove[0].id
      );
      if (index !== -1) {
        elements.splice(index, 1);
        setElements(elements);
        if (rfInstance) {
          onLoad(rfInstance);
        }
      }
      let tRef;
      if (elements && elements.length) {
        if (tRef) {
          clearTimeout(tRef);
          tRef = null;
        }
        tRef = setTimeout((_) => {
          const obj = serializeChart(elements);

          props.sendChartData(obj);
        }, 1 * 1000);
      }
    }
  };

  const onLoad = (_reactFlowInstance: OnLoadParams) => {
    setRfInstance(_reactFlowInstance);
    const obj = serializeChart(elements);
  };

  const setColors = (name: string): string => {
    if (name) {
      switch (name.toLowerCase()) {
        case 'input':
          return theme.palette.custom.inputNode;
        case 'store':
        case 'output':
          return theme.palette.custom.outputNode;
        case 'transform':
          return theme.palette.custom.transformNode;
        case 'default':
          return theme.palette.custom.transformNode;
      }
      return theme.palette.custom.transformNode;
    } else {
      return theme.palette.custom.transformNode;
    }
  };

  const onDrop = (event: DragEvent) => {
    event.preventDefault();
    if (rfInstance) {
      const type: any = JSON.parse(
        event.dataTransfer.getData('application/dataflow')
      );
      const position = rfInstance.project({
        x: event.pageX - 300,
        y: event.pageY - 100,
      });

      const newNode: any = {
        id: type.id,
        connector_id: type.connector_id,
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
      setElements((es) => es.concat(newNode));

      const obj = serializeChart([newNode]);
      let obj2 = serializeChart(elements);
      let tRef;
      if (obj && obj.length) {
        if (tRef) {
          clearTimeout(tRef);
          tRef = null;
        }
        tRef = setTimeout((_) => {
          if (obj2.length) {
            obj2.push(obj[0]);
          } else {
            obj2 = obj;
          }
          props.addNewNode(obj2);
        }, 1 * 1000);
      }
    }
  };

  // useEffect(() => {
  //   if (rfInstance) {
  //     const obj = serializeChart(elements);
  //     let tRef;
  //     if (obj && obj.length) {
  //       if (tRef) {
  //         clearTimeout(tRef);
  //         tRef = null;
  //       }
  //       tRef = setTimeout((_) => {
  //         // props.addNewNode(obj);
  //       }, 1 * 1000);
  //     }
  //   }
  // }, [rfInstance, elements]);

  const onDragOver = (event: DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onElementClick = (event: any, element: any) => {
    event.preventDefault();
    if (element) {
      // const _deserilize = deserializeChart(elements);
      // const payload = [];
      // for (let i = 0; i < _deserilize.length; i += 1) {
      //   if (
      //     _deserilize[i].type !== 'custom' &&
      //     _deserilize[i].id !== element.id
      //   ) {
      //     payload.push({
      //       id: _deserilize[i].id,
      //       name: _deserilize[i].id,
      //     });
      //   }
      // }
      element = elements.filter((value) => value.id === element.id);
      const obj = serializeChart([...element]);
      props.elementClicked(obj);
    }
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

  const deserializeChart = (chartObject: any, label: any = null): any => {
    const _chartInstance =
      chartObject &&
      chartObject.map((e: any) => {
        if (e.data) {
          if (e.data.component) {
            switch (e.data.component) {
              case 'Card':
                e.data = {
                  label: (
                    <Card1 {...e.data.props}>{e.data.props.children}</Card1>
                  ),
                };
                break;
              case 'GessaCard1':
              case 'Card1':
                if (e && e.data && e.data.props) {
                  e.data.props.leftAccent = setColors(e.type);
                }
                e.data = {
                  label: <Card1 {...e.data.props} />,
                };
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
          }
        } else {
          return e;
          //do nothing
        }
        return e;
      });
    return _chartInstance;
  };

  const onNodeDragStop = (event: any, element: any) => {
    const index = elements.findIndex((value: any) => value.id === element.id);
    if (index !== -1) {
      elements[index] = element;
      setElements(elements);
    }
    let tRef;
    if (elements && elements.length) {
      if (tRef) {
        clearTimeout(tRef);
        tRef = null;
      }
      tRef = setTimeout((_) => {
        const obj = serializeChart(elements);
        props.sendChartData(obj);
      }, 1 * 1000);
    }
  };

  useEffect(() => {
    const chartObj = JSON.parse(JSON.stringify(props.data));
    const _deserilize = deserializeChart(chartObj);
    setElements(_deserilize);
    // if (props.deleteNode) {
    //   onElementsRemove(props.deleteNode);
    // }
  }, [props.data, props.deleteNode]);

  return (
    <StyledChartBox>
      <ReactFlowProvider>
        <div className="flex flex-col  justify-between items-start w-full h-screen">
          <div className="flex gap-2 mt-2 flex-row flex-grow  rounded w-full p-2 h-full">
            <ReactFlow
              elements={elements}
              onConnect={onConnect}
              onElementsRemove={onElementsRemove}
              onElementClick={onElementClick}
              onNodeDragStop={onNodeDragStop}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onLoad={onLoad}
              nodeTypes={nodeTypes}
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
        </div>
      </ReactFlowProvider>
    </StyledChartBox>
  );
}

export default ChartBox;
