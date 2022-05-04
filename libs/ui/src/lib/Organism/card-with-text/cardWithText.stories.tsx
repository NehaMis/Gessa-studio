import { ChartBox, ChartBoxProps } from '@gessa/ui';
import { Story, Meta } from '@storybook/react';
import CardWithText, { ICardWithTextProps } from './cardWithText';

export default {
  component: CardWithText,
  title: 'Organism/Card with text',
  argTypes: {},
} as Meta;

const Template: Story<ICardWithTextProps> = (args) => (
  <CardWithText {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Input',
  subtitle: 'Upto current query index lorem ipsum',
  actions: [
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
    {
      text: 'Choice',
      style: 'outline',
    },
  ],
};
