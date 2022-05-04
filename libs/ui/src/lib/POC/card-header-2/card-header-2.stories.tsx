import { CardHeader1, CardHeader1Props } from '@gessa/ui';
import { Story, Meta } from '@storybook/react';
import CardHeader2, { CardHeader2Props } from './card-header-2';

export default {
  component: CardHeader2,
  title: 'POC/Molecules/Card-header-2',
  argTypes: {},
} as Meta;

const Template: Story<CardHeader2Props> = (args) => <CardHeader2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'End Point',
  data: [
    {
      text1: 'Title',
      text2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      userData: {
        color: 'red',
        size: 45,
        image:
          'https://www.sunrisefamilydentalcare.com/wp-content/uploads/2018/09/smiling-girl-stock2-768x512.jpg',
      },
    },
    {
      text1: 'Title',
      text2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      icon: {
        name: 'Preview',
        size: 40,
        color: '#459ff2',
        label: 'Preview',
      },
    },
  ],
  actions: [
    {
      type: 'button',
      action: {
        name: 'Test connection',
        label: 'Test connection',
        size: 12,
        color: '#459ff2',
      },
    },
    {
      type: 'icon',
      action: {
        name: 'Edit',
        label: 'Edit',
        size: 30,
        color: '#459ff2',
      },
    },
    {
      type: 'icon',
      action: {
        name: 'Add',
        label: 'Add',
        size: 30,
        color: '#459ff2',
      },
    },
  ],
};
