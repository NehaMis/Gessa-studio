import { Selectoption, SelectoptionProps } from '@gessa/ui';
import { Story, Meta } from '@storybook/react';

export default {
  component: Selectoption,
  title: 'Molecules/Select Option',
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<SelectoptionProps> = (args) => <Selectoption {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label Text',
  data: [
    {
      id: '1',
      value: 'Option 1',
    },
    { id: '2', value: 'Option 2' },
    {
      id: '3',
      value: 'Option 3',
    },
  ],
};
