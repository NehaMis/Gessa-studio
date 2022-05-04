import React from 'react';
import Demo2 from './components/Demo2Ui';

export interface Props {}

const DemoWrapper = (props: Props) => {
  return (
    <div>
      <Demo2></Demo2>
    </div>
  );
};

export default DemoWrapper;
