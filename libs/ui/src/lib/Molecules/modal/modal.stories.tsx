import { Chip, IChipProps } from '@gessa/ui';
import { Story, Meta } from '@storybook/react';
import Modal, { ModalProps } from './modal';
export default {
  component: Modal,
  title: 'Molecules/Modal',
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ModalProps> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'file.pdf',
  subtitle: 'Are you sure you want to delete this file ?',
  icon: {
    name: 'Bell',
    size: 20,
    color: 'red',
    label: 'Bell',
  },
  actions: [
    { name: 'Cancel', varient: 'outlined' },
    { name: 'Select', varient: 'contained' },
  ],
};
