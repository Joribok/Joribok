import { Meta, Story } from '@storybook/react';

import CommentBox, { CommentBoxProps } from '.';

export default {
  title: 'LuckyBox/CommentBox',
  component: CommentBox,
} as Meta;

const Template: Story<CommentBoxProps> = args => <CommentBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'skyblue',
  children: '오늘은 복권을 사야할지도?',
};
