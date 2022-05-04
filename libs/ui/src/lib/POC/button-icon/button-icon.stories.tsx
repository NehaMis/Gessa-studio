import { Story, Meta } from '@storybook/react';
import { ButtonIcon, ButtonIconProps } from './button-icon';
export default {
  component: ButtonIcon,
  title: 'POC/Atoms/ButtonIcon',
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonIconProps> = (args) => <ButtonIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonAction: {
    type: 'button',
    action: {
      name: 'Add',
      label: 'Add',
      size: 25,
      color: '#ffffff',
    },
  },
};
