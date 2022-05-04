import { Story, Meta } from "@storybook/react";
import {
  PracticeComponent,
  PracticeComponentProps,
} from "./practice-component";

export default {
  component: PracticeComponent,
  title: "POC/Practice",
  argTypes: {},
} as Meta;

const Template: Story<PracticeComponentProps> = (args) => (
  <PracticeComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
