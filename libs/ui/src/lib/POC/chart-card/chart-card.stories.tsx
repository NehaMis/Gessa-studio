import { Story, Meta } from '@storybook/react';
import ChartCard, { ChartCardProps } from './chart-card';

export default {
  component: ChartCard,
  title: 'POC/Molecules/Chart-Card',
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ChartCardProps> = (args) => <ChartCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: '1',
  backgroundColor: 'white',
  title: 'Title 1',
  tagBackgroundColor: '#D8E0FF',
  tagColor: '#1E48B5',
  tagName: 'Input',
  icon: { name: 'Bell', color: 'green', size: 30, label: 'Bell' },
};
