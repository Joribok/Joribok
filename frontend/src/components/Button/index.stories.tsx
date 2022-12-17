import { Meta, Story } from '@storybook/react';

import Button, { ButtonProps } from '.';

import { SIZE } from '@/constants';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const LargeButton = Template.bind({});
LargeButton.args = {
  size: SIZE.LARGE,
  isAvailable: true,
  children: '큰 버튼',
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  size: SIZE.MEDIUM,
  isAvailable: true,
  children: '중간 버튼',
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  size: SIZE.SMALL,
  isAvailable: true,
  children: '작은 버튼',
};
