import { Story, Meta } from '@storybook/react';
import MultilineText1, { MultilineText1Props } from './multiline-text-1';

export default {
  component: MultilineText1,
  title: 'POC/Molecules/Multiline Text 1',
  argTypes: {},
} as Meta;

const Template: Story<MultilineText1Props> = (args) => (
  <MultilineText1 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text1: 'Title',
  text2:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
  icon: {
    name: 'Preview',
    size: 40,
    color: '#459ff2',
    label: 'Preview',
  },
};
