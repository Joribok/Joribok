import { Meta, Story } from '@storybook/react';

import LuckyBox, { LuckyBoxProps } from '.';

export default {
  title: 'LuckyBox',
  component: LuckyBox,
} as Meta;

const Template: Story<LuckyBoxProps> = args => <LuckyBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  fortune: '오늘은 복권을 사야할지도?',
  thing: '스마트폰',
  color: '파스텔 블루',
};
