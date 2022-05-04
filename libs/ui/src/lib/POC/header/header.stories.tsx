import { Header, HeaderProps } from '@gessa/ui';
import { Story, Meta } from '@storybook/react';
import React from 'react';

export default {
  component: Header,
  title: 'POC/Organisms/Header',
  argTypes: {},
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  search: {
    value: '',
    placeholder: 'Search Project',
    icon: {
      name: 'Search',
      label: 'Search',
      size: 30,
      color: '#459ff2',
    },
  },
  actions: [
    {
      type: 'icon',
      action: {
        name: 'Filter',
        label: 'Filter',
        size: 25,
        color: '#459ff2',
      },
    },
  ],
  buttonAction: [
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
