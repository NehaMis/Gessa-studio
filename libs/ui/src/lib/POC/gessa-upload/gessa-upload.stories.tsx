import { GessaUpload, GessaUploadProps } from '@gessa/ui';
import { Story, Meta } from '@storybook/react';

export default {
  component: GessaUpload,
  title: 'POC/Molecules/Gessa Upload',
  argTypes: {},
} as Meta;

const Template: Story<GessaUploadProps> = (args) => <GessaUpload {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  leftIcon: {
    name: 'FileType1',
    size: 40,
    color: '#459ff2',
    label: 'FileType1',
  },
  text: 'Filename.txt',
  rightIcon: {
    name: 'Trash',
    size: 25,
    color: '#459ff2',
    label: 'Trash',
  },
};
