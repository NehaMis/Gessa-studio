// import { ChartBox, ChartBoxProps } from '@gessa/ui';
import { Story, Meta } from '@storybook/react';
import { TagsInput, TagInputProps } from './TagsInput';

export default {
  component: TagsInput,
  title: 'Organism/TagsInput',
  argTypes: {},
} as Meta;

const Template: Story<TagInputProps> = (args) => <TagsInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
