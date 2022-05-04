import { useState, useEffect } from 'react';
import ReactFlow from 'react-flow-renderer';
import { Card } from './Card';
import Image from './dataflow_number.svg';
import data from './data.json';
import { Button } from '@mui/material/Button';

const DEFAULT_ELEMENTS = [
  {
    id: '1',
    data: {
      label: (
        <Card
          id="1"
          backgroundColor="white"
          title="Title 1"
          tagBackgroundColor="#D8E0FF"
          tagColor="#1E48B5"
          tagName="Input"
          image={Image}
        />
      ),
    },
    position: { x: 20, y: 150 },
    sourcePosition: 'right',
    type: 'input',
  },
  {
    id: '2',
    data: {
      label: (
        <Card
          id="2"
          backgroundColor="white"
          title="Title 2"
          tagBackgroundColor="#CEEFE1"
          tagColor="#169560"
          tagName="Transform"
          image={Image}
        />
      ),
    },
    position: { x: 250, y: 25 },
  },
  {
    id: '3',
    data: {
      label: (
        <Card
          id="3"
          backgroundColor="white"
          title="Title 3"
          tagBackgroundColor="#FFE7FE"
          tagColor="#CF6ACB"
          tagName="Store"
          image={Image}
        />
      ),
    },
    position: { x: 550, y: 25 },
    type: 'output',
    targetPosition: 'left',
  },
  {
    id: '4',
    data: {
      label: (
        <Card
          id="4"
          backgroundColor="white"
          title="Title 4"
          tagBackgroundColor="#CEEFE1"
          tagColor="#169560"
          tagName="Transform"
          image={Image}
        />
      ),
    },
    position: { x: 250, y: 250 },
  },
  {
    id: '5',
    data: {
      label: (
        <Card
          id="5"
          backgroundColor="white"
          title="Title 5"
          tagBackgroundColor="#CEEFE1"
          tagColor="#169560"
          tagName="Transform"
          image={Image}
        />
      ),
    },
    position: { x: 350, y: 450 },
  },
  {
    id: '6',
    data: {
      label: (
        <Card
          id="6"
          backgroundColor="white"
          title="Title 6"
          tagBackgroundColor="#FFE7FE"
          tagColor="#CF6ACB"
          tagName="Store"
          image={Image}
        />
      ),
    },
    position: { x: 550, y: 325 },
    type: 'output',
    targetPosition: 'left',
  },
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
  { id: 'e2-3', source: '2', target: '3', type: 'smoothstep' },
  { id: 'e1-4', source: '1', target: '4', type: 'smoothstep' },
  { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
];

export const ShowChart = (props) => {
  const [elements, setElements] = useState(
    props.data ? props.data : DEFAULT_ELEMENTS
  );

  function getRawData() {
    const newData = [];
    data.map((element) => {
      if (element && element.data && element.data.label) {
        element.data.label = (
          <Card
            id={element.data.label.props.id}
            backgroundColor={element.data.label.props.backgroundColor}
            title={element.data.label.props.title}
            tagBackgroundColor={element.data.label.props.tagBackgroundColor}
            tagColor={element.data.label.props.tagColor}
            tagName={element.data.label.props.tagName}
            image={element.data.label.props.image}
          />
        );
      }
    });
    return data;
  }

  const getJSONData = () => {
    const rawData = getRawData();
    setElements(rawData);
  };

  const loadJSONData = () => {};

  useEffect(() => {
    return () => {};
  }, [elements]);
  return (
    <div style={{ height: '90vh' }} className="flex flex-col">
      <div className="flex flex-row justify-between items-center gap-5 p-1">
        End Points
        <div className="flex flex-row gap-5">
          <Button
            color="secondary"
            style={{ backgroundColor: 'gray' }}
            onClick={getJSONData}
          >
            Get Json
          </Button>
          <Button
            color="secondary"
            onClick={loadJSONData}
            style={{ backgroundColor: 'gray' }}
          >
            Load JSON
          </Button>
        </div>
      </div>
      <ReactFlow elements={elements}></ReactFlow>
    </div>
  );
};
