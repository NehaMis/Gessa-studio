import { Story, Meta } from '@storybook/react';
import { ITableHeaderCellProps, TableHeaderCell } from './table-header-cell';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: TableHeaderCell,
  title: 'Molecules/TableHeaderCell',
  argTypes: {
    onSearchInput: {
      action: 'clicked',
      table: {
        disable: true,
      },
    },
    menuClicked: {
      action: 'clicked',
      table: {
        disable: true,
      },
    },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<ITableHeaderCellProps> = (args) => (
  <TableHeaderCell {...args} />
);

export const HeaderAndMenuWithSearchOption = Template.bind({});
HeaderAndMenuWithSearchOption.args = {
  title: 'Title goes here',
  searchData: {
    searchText: 'Text to be searched',
    placeholder: 'Enter string to search',
    searchIcon: {
      name: 'Search',
      size: 15,
      color: '#797878',
      label: 'Search',
    },
  },
  actions: [
    {
      label: 'Menu1',
      value: 'menu1',
    },
    {
      label: 'Menu2',
      value: 'menu2',
    },
    {
      label: 'Menu3',
      value: 'menu3',
    },
    {
      label: 'Menu4',
      value: 'menu4',
    },
  ],
};
HeaderAndMenuWithSearchOption.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=294%3A69647&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const HeaderAndMenuWithoutSearchOption = Template.bind({});
HeaderAndMenuWithoutSearchOption.args = {
  title: 'Title goes here',
  searchData: {
    searchText: '',
    placeholder: 'Enter string to search',
    searchIcon: {
      name: 'Search',
      size: 15,
      color: '#797878',
      label: 'Search',
    },
  },
  actions: [
    {
      label: 'Menu1',
      value: 'menu1',
    },
    {
      label: 'Menu2',
      value: 'menu2',
    },
    {
      label: 'Menu3',
      value: 'menu3',
    },
    {
      label: 'Menu4',
      value: 'menu4',
    },
  ],
};
HeaderAndMenuWithoutSearchOption.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=294%3A69647&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
