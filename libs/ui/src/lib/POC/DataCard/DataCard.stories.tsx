import { Story, Meta } from '@storybook/react';
import { DataCard, DataCardProps } from './DataCard';

export default {
  component: DataCard,
  title: 'POC/Molecules/DataCard',
  argTypes: {},
} as Meta;

const Template: Story<DataCardProps> = (args) => <DataCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Analytics',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
};
