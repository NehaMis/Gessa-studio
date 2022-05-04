import CustomChip from './chip';
import { ChipProps } from './chip';
import { Story, Meta } from '@storybook/react';
import { IconComponent } from '../../POC/icon-component/icon-component';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: CustomChip,
  title: 'Atoms/Chip',
  argTypes: {
    color: {
      options: [
        'primary',
        'secondary',
        'default',
        'error',
        'info',
        'success',
        'warning',
      ].sort(),
      control: { type: 'select' },
    },
    rightIconClick: {
      action: 'clicked',
      table: {
        disabled: true,
      },
    },
    leftIconClick: {
      action: 'clicked',
      table: {
        disabled: true,
      },
    },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<ChipProps> = (args) => <CustomChip {...args} />;

export const PrimaryChip = Template.bind({});
PrimaryChip.args = {
  color: 'primary',
  label: 'Primary Chip',
};
PrimaryChip.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=182%3A17139&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const SecondaryChip = Template.bind({});
SecondaryChip.args = {
  color: 'secondary',
  label: 'Secondary Chip',
};
SecondaryChip.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=182%3A17139&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const OutlinedChip = Template.bind({});
OutlinedChip.args = {
  color: 'primary',
  label: 'Outlined Chip',
  variant: 'outlined',
};
OutlinedChip.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=182%3A17139&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const ChipAndIcon = Template.bind({});
ChipAndIcon.args = {
  color: 'primary',
  label: 'Right Icon',
  rightIcon: <IconComponent size={17} name="close_black_24dp" label="close" />,
};
ChipAndIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=182%3A17139&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const IconAndChip = Template.bind({});
IconAndChip.args = {
  color: 'primary',
  label: 'Left Icon',
  leftIcon: <IconComponent size={17} name="close_black_24dp" label="close" />,
};
IconAndChip.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=182%3A17139&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const BothSideIconChip = Template.bind({});
BothSideIconChip.args = {
  color: 'primary',
  label: 'Icon Chip Icon',
  rightIcon: <IconComponent size={17} name="close_black_24dp" label="close" />,
  leftIcon: <IconComponent size={17} name="close_black_24dp" label="close" />,
};
BothSideIconChip.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=182%3A17139&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
