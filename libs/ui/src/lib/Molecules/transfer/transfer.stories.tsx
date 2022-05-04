import Transfer, { TransferProps } from './transfer';
import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: Transfer,
  title: 'Molecules/Transfer',
  argTypes: {
    onUpdateList: {
      action: 'List transfer',
      table: {
        disable: true,
      },
    },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<TransferProps> = (args) => <Transfer {...args} />;
export const TransferItems = Template.bind({});
TransferItems.args = {
  leftList: [
    { label: 'displayerror', value: 'error' },
    { label: 'displayerror1', value: 'error1' },
    { label: 'displayerror2', value: 'error2' },
    { label: 'displayerror3', value: 'error3' },
  ],
  rightList: [
    { label: 'displayerror4', value: 'error4' },
    { label: 'displayerror5', value: 'error5' },
    { label: 'displayerror6', value: 'error6' },
    { label: 'displayerror7', value: 'error7' },
  ],
  leftListLabel: 'Available Fields',
  rightListLabel: 'Selected Fields',
};
TransferItems.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=251%3A18649&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
