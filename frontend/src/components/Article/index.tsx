import Box from '@/components/Box/index';

import { getRandomColor } from '@/util/getRandomColor';
import * as S from './index.styles';

export interface ArticleProps {
  id: number;
  nickName: string;
  plan: string;
  direction: 'left' | 'right';
}

const Article = ({ id, nickName, plan, direction }: ArticleProps) => {
  const onArticleClick = () => {
    // 상세페이지로 이동
    console.log(id);
  };

  return (
    <S.Container direction={direction}>
      <S.UserName randomColor={getRandomColor()}>{nickName}</S.UserName>
      <S.Plan onClick={onArticleClick}>
        <Box color={getRandomColor()} align={'center'}>
          {plan}
        </Box>
      </S.Plan>
    </S.Container>
  );
};

export default Article;
