import { Card1 } from '@gessa/ui';
import { Story, Meta } from '@storybook/react';
import ChartCard from '../../POC/chart-card/chart-card';
import FlowRendererChart, {
  FlowRendererChartProps,
} from './flow-renderer-chart';

export default {
  component: FlowRendererChart,
  title: 'Organism/Flow-Chart',
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<FlowRendererChartProps> = (args) => (
  <FlowRendererChart {...args} />
);

export const Primary = Template.bind({});
const primaryArgs: any = {
  defData: [
    {
      id: '3',
      type: 'source',
      data: {
        label: (
          <Card1
            icon={{ name: 'Menu-Mysql', size: 30, color: '#ff00ff' }}
            leftAccent={'#ff1470'}
            otherData={{}}
            text={'Card3'}
          />
        ),
      },
      position: { x: 200, y: 100 },
    },
    {
      id: '2',
      type: 'source',
      data: {
        label: (
          <Card1
            icon={{ name: 'Menu-Postgres', size: 30, color: '#ff00ff' }}
            leftAccent={'#057c3f'}
            otherData={{}}
            text={'Card2'}
          />
        ),
      },
      position: { x: 670, y: 100 },
    },

    {
      id: '5',
      type: 'source',
      data: {
        label: (
          <Card1
            icon={{ name: 'Menu-Mysql', size: 30, color: '#ff00ff' }}
            leftAccent={'#057c3f'}
            otherData={{}}
            text={'Card5'}
          />
        ),
      },
      position: { x: 305, y: 50 },
    },
    {
      id: '1',
      type: 'source',
      data: {
        label: (
          <Card1
            icon={{ name: 'Menu-Postgres', size: 30, color: '#ff00ff' }}
            leftAccent={'#dbe15f'}
            otherData={{}}
            text={'Card1'}
          />
        ),
      },
      position: { x: 310, y: 450 },
    },
    {
      id: '6',
      type: 'store',
      data: {
        label: (
          <Card1
            icon={{ name: 'Menu-Mysql', size: 30, color: '#ff00ff' }}
            leftAccent={'#057c3f'}
            otherData={{}}
            text={'Card6'}
          />
        ),
      },
      position: { x: 100, y: 150 },
    },
    {
      id: '4',
      position: { x: 500, y: 500 },
      type: 'source',
      data: {
        label: (
          <Card1
            icon={{ name: 'Menu-Info', size: 30, color: '#ff00ff' }}
            leftAccent={'#ff1470'}
            otherData={{}}
            text={'Card4'}
          />
        ),
      },
    },
    {
      id: '7',
      type: 'store',
      data: {
        label: (
          <Card1
            icon={{ name: 'Menu-Info', size: 30, color: '#ff00ff' }}
            leftAccent={'#057c3f'}
            otherData={{}}
            text={'Card7'}
          />
        ),
      },
      position: { x: 430, y: 300 },
    },
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      type: 'smoothstep',
    },
    {
      id: 'e1-3',
      source: '1',
      target: '3',
      type: 'smoothstep',
    },
    {
      id: 'e3-4',
      source: '3',
      target: '4',
      type: 'smoothstep',
    },
    {
      id: 'e4-5',
      source: '4',
      target: '5',
      type: 'smoothstep',
    },
    {
      id: 'e5-6',
      source: '5',
      target: '6',
      type: 'smoothstep',
    },
    {
      id: 'e5-7',
      source: '5',
      target: '7',
      type: 'smoothstep',
    },
  ],
};
Primary.args = primaryArgs;
