import { Meta, Story } from '@storybook/react';

import Input, { InputProps } from '.';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = args => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  isValid: true,
};

export const UnderlineInput = Template.bind({});
UnderlineInput.args = {
  isValid: true,
  hasUnderline: true,
};
