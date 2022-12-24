import { Meta, Story } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Header from '.';

export default {
  title: 'Header',
  component: Header,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone12',
    },
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = args => <Header {...args} />;

export const Default = Template.bind({});
