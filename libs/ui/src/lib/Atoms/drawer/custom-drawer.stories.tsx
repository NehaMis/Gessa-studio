import Drawer, { DrawerProps } from './custom-drawer';
import { Story, Meta } from '@storybook/react';
import Box from '@mui/material/Box';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: Drawer,
  title: 'Atoms/Drawer',
  argTypes: {
    onCloseFunc: {
      action: 'drawer closed',
      table: {
        disable: true,
      },
    },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<DrawerProps> = (args) => (
  <Drawer {...args}>
    <Box>Demo application</Box>
  </Drawer>
);

export const DrawerSelection = Template.bind({});
DrawerSelection.args = {
  anchor: 'top',
  variant: 'temporary',
  displayDrawer: true,
};
DrawerSelection.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=247%3A16117&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
