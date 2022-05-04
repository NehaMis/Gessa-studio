import { Story, Meta } from '@storybook/react';
import React from 'react';
import {
  MultilineTextUser,
  MultilineTextUserProps,
} from './multiline-text-user';

export default {
  component: MultilineTextUser,
  title: 'POC/Molecules/Multiline Text User',
  argTypes: {},
} as Meta;

const Template: Story<MultilineTextUserProps> = (args) => (
  <MultilineTextUser {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text1: 'Title',
  text2:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  userData: {
    color: 'red',
    size: 45,
    image:
      'https://www.sunrisefamilydentalcare.com/wp-content/uploads/2018/09/smiling-girl-stock2-768x512.jpg',
  },
};
