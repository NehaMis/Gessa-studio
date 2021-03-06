import TextInputField, { TextfieldProps } from './inputfield-text';
import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: TextInputField,
  title: 'Atoms/TextInputfield',
  argTypes: {
    onChangeFunc: {
      action: 'change value',
      table: {
        disable: true,
      },
    },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<TextfieldProps> = (args) => <TextInputField {...args} />;
export const InputFieldText = Template.bind({});
InputFieldText.args = {
  label: 'Demo',
  variant: 'outlined',
  color: 'primary',
};
InputFieldText.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=223%3A15984&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const ErrorInputField = Template.bind({});
ErrorInputField.args = {
  label: 'Demo',
  variant: 'outlined',
  color: 'error',
};
ErrorInputField.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=223%3A15984&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const SuccessInputField = Template.bind({});
SuccessInputField.args = {
  label: 'Demo',
  variant: 'outlined',
  color: 'success',
};
SuccessInputField.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=223%3A15984&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const WarningInputField = Template.bind({});
WarningInputField.args = {
  label: 'Demo',
  variant: 'outlined',
  color: 'warning',
};
WarningInputField.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=223%3A15984&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
