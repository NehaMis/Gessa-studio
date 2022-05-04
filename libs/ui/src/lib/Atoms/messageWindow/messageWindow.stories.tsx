import React from 'react';
import { Story, Meta } from '@storybook/react';
import MessageWindow, { MessageWindowProps } from './messageWindow';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconComponent } from '../../POC/icon-component/icon-component';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Atoms/MessageWindow',
  component: MessageWindow,
  argTypes: {
    onClose: {
      action: 'dialog closed',
      table: {
        disable: true,
      },
    },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<MessageWindowProps> = (args) => (
  <MessageWindow {...args} />
);

export const BasicMessageWindow = Template.bind({});
BasicMessageWindow.args = {
  open: true,
  title: 'File 1.pdf',
  description: 'Are you sure want delete this ?',
  icon: (
    <IconComponent
      name="delete_black_24dp"
      color="#727cad"
      size={27}
      label="App"
    />
  ),
  actions: [
    { name: 'Cancle', value: 'cancle', primary: false },
    { name: 'Delete', value: 'delete', primary: true },
  ],
};
BasicMessageWindow.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=239%3A15100&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};