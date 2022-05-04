import { Story, Meta } from '@storybook/react';
import BarChart, { BarChartProps } from './bar-chart';

export default {
  component: BarChart,
  title: 'Molecules/Bar Chart',
  argTypes: {},
} as Meta;

const Template: Story<BarChartProps> = (args) => <BarChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  x: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  y: [10, 20, 30, 40, 50, 60, 70],
};
