import { Meta, Story } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Slider, { SliderProps } from '.';

export default {
  title: 'Slider',
  component: Slider,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone12',
    },
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<SliderProps> = args => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  hideSlider: () => {},
};
