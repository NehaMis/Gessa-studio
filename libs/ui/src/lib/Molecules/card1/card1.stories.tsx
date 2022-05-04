import { Story, Meta } from '@storybook/react';
import Card1, { Card1Props } from './card1';

export default {
  component: Card1,
  title: 'Molecules/Card1',
  argTypes: {},
} as Meta;

const Template: Story<Card1Props> = (args) => <Card1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: {
    name: 'Menu-Postgres',
    size: 40,
    color: '#459ff2',
    label: 'Menu-Postgres',
  },
  leftAccent: '#f7d74d',
  text: 'Title card123456',
};

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  icon: {
    name: 'Menu-Mysql',
    size: 40,
    color: '#459ff2',
    label: 'Menu-Mysql',
  },
  leftAccent: '',
  text: '',
};
