import { ChartBox, ChartBoxProps } from '@gessa/ui';
import { Story, Meta } from '@storybook/react';

export default {
  component: ChartBox,
  title: 'Organism/Chart Box',
  argTypes: {},
} as Meta;

const Template: Story<ChartBoxProps> = (args) => <ChartBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: [
    {
      id: '1',
      type: 'source', // input node
      data: {
        component: 'Card1',
        props: {
          icon: {
            name: 'Preview',
            size: 40,
            color: '#459ff2',
            label: 'Preview',
          },
          leftAccent: '',
          text: '',
        },
      },
      position: { x: 10, y: 10 },
      AssociatedForm: [],
    },
    {
      id: '2',
      type: 'output', // input node
      data: {
        component: 'Card1',
        props: {
          icon: {
            name: 'Preview',
            size: 40,
            color: '#459ff2',
            label: 'Preview',
          },
          leftAccent: '',
          text: '',
        },
      },
      position: { x: 100, y: 100 },
      AssociatedForm: [],
    },
    { id: 'e1-2', source: '1', target: '2', animated: true },
  ],
};
