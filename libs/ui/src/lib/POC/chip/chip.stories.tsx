import { Story, Meta } from '@storybook/react';
import { Chip, ChipProps } from './chip';

export default {
  component: Chip,
  title: 'POC/Atoms/Chip',
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ChipProps> = (args) => <Chip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 'My form1',
  color: '#459ff2',
};
