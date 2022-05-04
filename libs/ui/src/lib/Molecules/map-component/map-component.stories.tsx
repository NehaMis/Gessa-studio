import { Story, Meta } from '@storybook/react';
import MapComponent, { MapComponentProps } from './map-component';

export default {
  component: MapComponent,
  title: 'Molecules/Map Component',
  argTypes: {},
} as Meta;

const Template: Story<MapComponentProps> = (args) => <MapComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
