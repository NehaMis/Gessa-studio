import { Story, Meta } from '@storybook/react';
import { Tag, TagProps } from './tag';

export default {
  component: Tag,
  title: 'POC/Atoms/Tag',
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    borderColor: { control: 'color' },
  },
} as Meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Bordered = Template.bind({});
Bordered.args = {
  backgroundColor: '#FFFFFF',
  color: '#459FF2',
  borderColor: '#459FF2',
  text: 'City',
};

export const ColorFilled = Template.bind({});
ColorFilled.args = {
  backgroundColor: '#F0F7FE',
  color: '#459FF2',
  borderColor: '#F0F7FE',
  text: 'Country',
};
