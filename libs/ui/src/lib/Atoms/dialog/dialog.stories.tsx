import { Meta } from '@storybook/react';
import Dialog, { DialogProps } from './dialog';
import Box from '@mui/material/Box';
import { DialogTitle } from '@mui/material';
import { DialogContent } from '@mui/material';
import { DialogContentText } from '@mui/material';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Atoms/Dailog',
  component: Dialog,
  decorators: [withDesign],
} as Meta;

const DialogChildren = () => {
  return (
    <Box component="div" sx={{ p: 2 }}>
      <DialogTitle>Hello This is Dialog</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          assumenda fugiat quaerat quos repellat cum quis est in explicabo?
        </DialogContentText>
      </DialogContent>
    </Box>
  );
};

export const BasicDailog = () => (
  <Dialog open={true}>
    <DialogChildren />
  </Dialog>
);
BasicDailog.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=239%3A15100&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
export const ExtraLargeMaxWidthDialog = () => (
  <Dialog open={true} maxWidth="xl">
    <DialogChildren />
  </Dialog>
);
ExtraLargeMaxWidthDialog.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=239%3A15100&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
export const FullScreenDailog = () => (
  <Dialog open={true} fullScreen={true}>
    <DialogChildren />
  </Dialog>
);
FullScreenDailog.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=239%3A15100&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
