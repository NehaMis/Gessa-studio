import { Story, Meta } from '@storybook/react';
import { DataCardWithTag, DataCardWithTagProps } from './DataCardWithTag';

export default {
  component: DataCardWithTag,
  title: 'POC/Molecules/DataCardWithTag',
  argTypes: {},
} as Meta;

const Template: Story<DataCardWithTagProps> = (args) => (
  <DataCardWithTag {...args} />
);

export const Default = Template.bind({});
Default.args = {
  headingText: 'Dataflow 1',
  bodyText:
    'Lorem ipsum dolor sit amet, consectetur sit adipiscing elit, sed do eiusmod tempor dolor incididunt ut labore et dolore magna.',
  Tag: {
    backgroundColor: '#F0F7FE',
    color: '#459FF2',
    borderColor: '#F0F7FE',
    text: 'Country',
  },
};
