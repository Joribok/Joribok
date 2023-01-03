import { Meta, Story } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import Login from '.';

export default {
  title: 'Login',
  component: Login,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone12',
    },
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = () => <Login />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {};
