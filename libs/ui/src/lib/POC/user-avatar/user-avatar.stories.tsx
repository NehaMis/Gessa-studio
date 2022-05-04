import { Story, Meta } from '@storybook/react';
import { UserAvatar, UserAvatarProps } from './user-avatar';

export default {
  component: UserAvatar,
  title: 'POC/Atoms/User Avatar',
  argTypes: {},
} as Meta;

const Template: Story<UserAvatarProps> = (args) => <UserAvatar {...args} />;

export const Default = Template.bind({});
const Defaultargs = {
  name: 'S Y',
  color: '#FF6464',
  size: 40,
};
Default.args = Defaultargs;

export const user = Template.bind({});
const userargs = {
  size: 40,
  image:
    'https://www.sunrisefamilydentalcare.com/wp-content/uploads/2018/09/smiling-girl-stock2-768x512.jpg',
};
user.args = userargs;

export const color = Template.bind({});
const colorargs = {
  name: 'Saul Yeleman',
  color: '#63ccff',
  size: 40,
};
color.args = colorargs;

export const name = Template.bind({});
const nameargs = {
  name: 'John Doe',
  color: '#FF6464',
  size: 40,
};
name.args = nameargs;

export const size = Template.bind({});
const sizeargs = {
  name: 'Saul Yeleman',
  color: '#FF6464',
  size: 40,
};
size.args = sizeargs;
