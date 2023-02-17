import Box from '@/components/Box/index';
import { PATH } from '@/constants';

import { getRandomColor } from '@/util/getRandomColor';
import Link from 'next/link';
import * as S from './index.styles';

export interface ArticleProps {
  id: number;
  nickname: string;
  plan: string;
  direction: 'left' | 'right';
}

const Article = ({ id, nickname, plan, direction }: ArticleProps) => {
  return (
    <Link href={`${PATH.BROWSER.PLAN}/${id}`}>
      <S.Container direction={direction}>
        <S.UserName randomColor={getRandomColor()}>{nickname}</S.UserName>
        <S.Plan>
          <Box color={getRandomColor()} align={'center'}>
            {plan}
          </Box>
        </S.Plan>
      </S.Container>
    </Link>
  );
};

export default Article;
