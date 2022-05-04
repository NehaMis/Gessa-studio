import { Card1, Card1Props } from '@gessa/ui';
import React from 'react';

import { Handle, Position } from 'react-flow-renderer';

export interface ICard1NodeProps {
  label: {
    props: Card1Props;
  };
}

const Card1Node = ({ data }: any): any => {
  return (
    <div>
      <Handle type="target" position={Position.Left} id={`${data.id}.left`} />  
      <Handle type="source" position={Position.Right} id={`${data.id}.right`} />
      {
        data && data.label && data.label.props &&
        <Card1 {...data.label.props} />
      }

    </div>
  );
};

export const nodeTypes = {
  Input: Card1Node,
  transform: Card1Node,
  Output: Card1Node,
  Store: Card1Node,
  input: Card1Node,
};
