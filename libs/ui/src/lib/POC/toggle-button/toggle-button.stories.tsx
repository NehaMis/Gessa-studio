import { Story, Meta } from '@storybook/react';
import { ToggleButtonComponent, ToggleButtonProps } from './toggle-button';
export default {
  component: ToggleButtonComponent,
  title: 'POC/Atoms/Toggle-Button',
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ToggleButtonProps> = (args) => (
  <ToggleButtonComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  actions: [
    {
      name: 'Add',
      label: 'Add',
      size: 25,
      color: '#459ff2',
    },
    {
      name: 'Filter',
      label: 'Filter',
      size: 25,
      color: '#459ff2',
    },
  ],
};
