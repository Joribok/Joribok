import Box from '@/components/Box/index';

import { getRandomColor } from '@/util/getRandomColor';
import * as S from './index.styles';

export interface ArticleProps {
  id: number;
  nickname: string;
  plan: string;
  direction: 'left' | 'right';
}

const Article = ({ id, nickname, plan, direction }: ArticleProps) => {
  const onArticleClick = () => {
    // 상세페이지로 이동 추후에 Link 태그로 감싸는 방향으로 조정 (일단, url주소가 상세히 정해져있지 않아서 이대로 두겠습니다)
    console.log(id);
  };

  return (
    <S.Container direction={direction}>
      <S.UserName randomColor={getRandomColor()}>{nickname}</S.UserName>
      <S.Plan onClick={onArticleClick}>
        <Box color={getRandomColor()} align={'center'}>
          {plan}
        </Box>
      </S.Plan>
    </S.Container>
  );
};

export default Article;
