import { Typography } from '@mui/material';
import React from 'react';

const Test = (props: any) => {
  return (
    <div>
      <Typography variant="h1">This is a {props.name} test</Typography>
    </div>
  );
};

export default Test;
