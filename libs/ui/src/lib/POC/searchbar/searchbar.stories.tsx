import { Story, Meta } from '@storybook/react';
import { Searchbar, SearchbarProps } from './searchbar';

export default {
  component: Searchbar,
  title: 'POC/Molecules/Searchbar',
  argTypes: {},
} as Meta;

const Template: Story<SearchbarProps> = (args) => <Searchbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  value: 'hello',
  placeholder: 'search me',
  icon: {
    name: 'Search',
    label: 'Search',
    size: 30,
    color: '#459ff2',
  },
};
