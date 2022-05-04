import { Box } from '@mui/material';
import * as React from 'react';
import { Button } from '@gessa/ui';
import { MessageWindow } from '@gessa/ui';
const DeleteSchema = (props: any) => {
  return (
    <Box component="div" sx={{ position: 'fixed', top: '0px' }}>
      <MessageWindow
        open={props.displayDeleteSchema}
        actions={[
          {
            name: 'Cancel',
            value: 'cancel',
            primary: false,
            handleClick: () => {
              props.setDisplayDeleteSchema(false);
            },
          },
          { name: 'Delete', value: 'delete', primary: true },
        ]}
        title="Delete Schema"
        description="Are you sure, You want to delete this Schema 1?"
        elevation={2}
        onClose={()=>{props.setDisplayDeleteSchema(false)}}
      />
    </Box>
  );
};

export default DeleteSchema;
