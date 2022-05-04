import React from 'react';
import { Navbar, NavbarProps } from '@gessa/ui';
import { Story, Meta } from '@storybook/react';

export default {
  component: Navbar,
  title: 'Organism/Navbar',
  argTypes: {},
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  logo: {
    name: 'Calendar',
    size: 40,
    color: '#8a8a98',
    label: 'Calendar',
  },

  topActions: [
    {
      name: 'Menu-Dashboard',
      size: 30,
      color: '#8a8a98',
      label: 'Menu-Dashboard',
    },
    {
      name: 'Menu-Backend',
      size: 30,
      color: '#8a8a98',
      label: 'Menu-Backend',
    },
    {
      name: 'Menu-Devops2',
      size: 30,
      color: '#8a8a98',
      label: 'Menu-Devops2',
    },
    {
      name: 'Menu-Dataops',
      size: 30,
      color: '#8a8a98',
      label: 'Menu-Dataops',
    },
    {
      name: 'Menu-Microapps',
      size: 30,
      color: '#8a8a98',
      label: 'Menu-Microapps',
    },
    {
      name: 'Menu-Devops',
      size: 30,
      color: '#8a8a98',
      label: 'Menu-Devops',
    },
    {
      name: 'Menu-MiscSetting',
      size: 30,
      color: '#8a8a98',
      label: 'Menu-MiscSetting',
    },
  ],
  topActionActive: 2,
  bottomActions: [
    {
      name: 'User',
      size: 30,
      color: '#8a8a98',
      label: 'User',
    },
    {
      name: 'Settings',
      size: 30,
      color: '#8a8a98',
      label: 'Settings',
    },
  ],

  bottomActionActive: 1,
};
