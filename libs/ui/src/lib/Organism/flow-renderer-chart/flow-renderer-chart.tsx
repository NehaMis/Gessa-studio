import ReactFlow from 'react-flow-renderer';
import { styled } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/system';
import { Paper } from '@mui/material';
import {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
} from 'react-flow-renderer';

/* eslint-disable-next-line */
export interface CardPosition {
  x: number;
  y: number;
}

export interface CardLabel {
  label: any;
}
export interface IChartData {
  id: string;
  backgroundColor: string;
  title: string;
  tagBackgroundColor: string;
  tagColor: string;
  tagName: string;
  image: any;
  changedObj: any;
}
export interface FlowRendererChartProps {
  id: string;
  data?: CardLabel;
  position?: CardPosition;
  sourcePosition?: string;
  type?: string;
  targetPosition?: string;
  source?: string;
  target?: string;
}

export function FlowRendererChart(props: any) {
  const [elements, setElements] = useState(props.defData);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onLoad = (_reactFlowInstance: any) => {
    return setReactFlowInstance(_reactFlowInstance);
  };

  const onDragOver = (event: any) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event: any) => {
    event.preventDefault();
  };
  const onNodeDragStop = (event: any, node: any) => {
    props.changedObj(node);
  };

  return (
    <div style={{ height: '80vh' }} className="relative box-border">
      <ReactFlow
        elements={props.defData}
        onLoad={onLoad}
        onDrop={onDrop}
        onNodeDragStop={onNodeDragStop}
        onDragOver={onDragOver}
      ></ReactFlow>
    </div>
  );
}

export default FlowRendererChart;
