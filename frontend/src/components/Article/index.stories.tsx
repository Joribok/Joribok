import { Meta, Story } from '@storybook/react';
import Article, { ArticleProps } from '.';

export default {
  title: 'Article',
  component: Article,
} as Meta;

const Template: Story<ArticleProps> = args => <Article {...args} />;

export const DefaultArticle = Template.bind({});
DefaultArticle.args = {
  id: 1,
  nickName: '샐리',
  direction: 'right',
  plan: '2023 행복하게해주세요 2줄 이상 넘어갈 때 어떻게 보여지는 예시 문장입니다. 얼마나 더 길게 유저들이 작성할 수 있을까요? ',
};
