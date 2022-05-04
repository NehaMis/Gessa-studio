import { Card1 } from '@gessa/ui';
import React, { useState, DragEvent } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  OnLoadParams,
  Elements,
  Connection,
  Edge,
  ElementId,
  Node,
} from 'react-flow-renderer';

const cardElements = [
  {
    icon: {
      name: 'Bell',
      size: 40,
      color: '#459ff2',
      label: 'Bell',
    },
    leftAccent: 'green',
    text: 'Bell',
  },
  {
    icon: {
      name: 'Preview',
      size: 40,
      color: '#459ff2',
      label: 'Preview',
    },
    leftAccent: 'green',
    text: 'krushna',
  },
  {
    icon: {
      name: 'Edit',
      size: 40,
      color: '#459ff2',
      label: 'Edit',
    },
    leftAccent: 'green',
    text: 'Edit',
  },
];
const initialElements = [
  {
    id: '1',
    type: 'input',
    data: {
      label: 'hello',
    },
    position: { x: 450, y: 450 },
  },
];

const onDragOver = (event: DragEvent) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
};

let id = 0;
const getId = (): ElementId => `dndnode_${id++}`;

const FlowChart = () => {
  const [reactFlowInstance, setReactFlowInstance] = useState<OnLoadParams>();
  const [elements, setElements] = useState<Elements>(initialElements);

  const onConnect = (params: Connection | Edge) => {
    setElements((els) => addEdge(params, els));
  };
  const onElementsRemove = (elementsToRemove: Elements) => {
    setElements((els) => removeElements(elementsToRemove, els));
  };
  const onLoad = (_reactFlowInstance: OnLoadParams) => {
    setReactFlowInstance(_reactFlowInstance);
  };

  const serializeChart = (chartInstance: any) => {
    // const _chartInstance = JSON.parse(JSON.stringify(chartInstance));

    const obj: any = {
      component: chartInstance.type,
      props: chartInstance.props,
    };

    return obj;
  };

  const onDrop = (event: DragEvent) => {
    event.preventDefault();
    if (reactFlowInstance) {
      const type: any = JSON.parse(
        event.dataTransfer.getData('application/reactflow')
      );
      const position = reactFlowInstance.project({
        x: 481,
        y: 200,
      });
      const newNode: Node = {
        id: getId(),
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

      setElements((es) => es.concat(newNode));
    }
  };

  const onDragStart = (event: DragEvent, nodeType: any) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    const obb = event.dataTransfer.getData('application/reactflow');
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div>
      <div
        className="reactflow-wrapper h-60 w-full "
        style={{ border: '1px solid', borderColor: 'red' }}
      >
        <ReactFlow
          elements={elements}
          onConnect={onConnect}
          onElementsRemove={onElementsRemove}
          onLoad={onLoad}
          onDrop={onDrop}
          onDragOver={onDragOver}
        />
      </div>
      <div>
        <aside>
          <div className="description">
            You can drag these nodes to the pane on the left.
          </div>
          {cardElements &&
            cardElements.map((card1: any) => {
              return (
                <div
                  className="react-flow__node-input mb-5"
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
          {/* <div
              className="react-flow__node-default"
              onDragStart={(event: DragEvent) => onDragStart(event, 'default')}
              draggable
            >
              Default Node
            </div>
            <div
              className="react-flow__node-output"
              onDragStart={(event: DragEvent) => onDragStart(event, 'output')}
              draggable
            >
              Output Node
            </div> */}
        </aside>
      </div>
    </div>
  );
};

const DnDFlow = () => {
  const [reactFlowInstance, setReactFlowInstance] = useState<OnLoadParams>();
  const [elements, setElements] = useState<Elements>(initialElements);

  const onConnect = (params: Connection | Edge) => {
    setElements((els) => addEdge(params, els));
  };
  const onElementsRemove = (elementsToRemove: Elements) => {
    setElements((els) => removeElements(elementsToRemove, els));
  };
  const onLoad = (_reactFlowInstance: OnLoadParams) => {
    setReactFlowInstance(_reactFlowInstance);
  };

  const serializeChart = (chartInstance: any) => {
    // const _chartInstance = JSON.parse(JSON.stringify(chartInstance));
    const obj: any = {
      component: chartInstance.type,
      props: chartInstance.props,
    };

    return obj;
  };

  const onDrop = (event: DragEvent) => {
    event.preventDefault();

    if (reactFlowInstance) {
      const type: any = JSON.parse(
        event.dataTransfer.getData('application/reactflow')
      );
      const position = reactFlowInstance.project({
        x: 481,
        y: 200,
      });
      const newNode: Node = {
        id: getId(),
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

      setElements((es) => es.concat(newNode));
    }
  };

  const onDragStart = (event: DragEvent, nodeType: any) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    const obb = event.dataTransfer.getData('application/reactflow');
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <FlowChart />
      </ReactFlowProvider>
    </div>
  );
};

export default DnDFlow;
