import { CardHeader1, CardHeader1Props } from '@gessa/ui';
import { Story, Meta } from '@storybook/react';

export default {
  component: CardHeader1,
  title: 'POC/Molecules/Card-header-1',
  argTypes: {},
} as Meta;

const Template: Story<CardHeader1Props> = (args) => <CardHeader1 {...args} />;

export const TitleWithActionButtonAndIcon = Template.bind({});
TitleWithActionButtonAndIcon.args = {
  title: 'End Point',
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
        size: 25,
        color: '#459ff2',
      },
    },
    {
      type: 'icon',
      action: {
        name: 'Add',
        label: 'Add',
        size: 25,
        color: '#459ff2',
      },
    },
  ],
};

export const TitleWithActionIcon = Template.bind({});
TitleWithActionIcon.args = {
  title: 'End Point',
  actions: [
    {
      type: 'icon',
      action: {
        name: 'Edit',
        label: 'Edit',
        size: 25,
        color: '#459ff2',
      },
    },
    {
      type: 'icon',
      action: {
        name: 'Add',
        label: 'Add',
        size: 25,
        color: '#459ff2',
      },
    },
  ],
};
