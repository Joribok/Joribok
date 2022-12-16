import { Meta, Story } from '@storybook/react';

import Box, { BoxProps } from '.';

import { ALIGN } from '@/constants';
import theme from '@/styles/theme';

export default {
  title: 'Box',
  component: Box,
} as Meta;

const Template: Story<BoxProps> = args => <Box {...args} />;

export const DefaultBox = Template.bind({});
DefaultBox.args = {
  children: '기본 박스입니다',
};

export const CenterBox = Template.bind({});
CenterBox.args = {
  align: ALIGN.CENTER,
  children: '가운데 정렬 박스입니다',
};

export const RightBox = Template.bind({});
RightBox.args = {
  align: ALIGN.RIGHT,
  children: '오른쪽 정렬 박스입니다',
};

export const ColorSwitchBox = Template.bind({});
ColorSwitchBox.args = {
  color: theme.colors.YELLOW_200,
  children: '색을 바꾼 박스입니다',
};

export const LongBox = Template.bind({});
LongBox.args = {
  children:
    '여러 줄이 들어오면 이렇게 늘어납니다~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
};
