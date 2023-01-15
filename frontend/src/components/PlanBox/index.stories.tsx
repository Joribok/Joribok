import { Meta, Story } from '@storybook/react';

import PlanBox, { PlanBoxProps } from '.';

export default {
  title: 'PlanBox',
  component: PlanBox,
} as Meta;

const Template: Story<PlanBoxProps> = args => <PlanBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  plan: '스듀 엔딩 보기',
  onDeleteButtonClick: () => {
    console.log('삭제 버튼 누름');
  },
};
