import { useTheme } from '@emotion/react';

import CommentBox from './CommentBox';
import { useTyping } from '@/hooks/useTyping';

import * as S from './index.styles';

const animationDelay = 5;

interface LuckyBoxProps {
  fortune: string;
  thing: string;
  color: string;
}

const LuckyBox = ({ fortune, thing, color }: LuckyBoxProps) => {
  const splitedFortune = useTyping(fortune);
  const splitedThing = useTyping(thing, fortune.length + animationDelay);
  const splitedColor = useTyping(color, fortune.length + thing.length + animationDelay * 2);

  const { colors } = useTheme();

  return (
    <S.Container>
      <S.Section>
        <h3>
          올해 나의 <p>운세</p>는? 😘
        </h3>
        <CommentBox color={colors.YELLOW_500}>{splitedFortune}</CommentBox>
      </S.Section>
      <S.Section>
        <h3>
          올해 나의 <p>행운의 물건</p>은? 🧚‍♀️
        </h3>
        <CommentBox color={colors.GREEN_500}>{splitedThing}</CommentBox>
      </S.Section>
      <S.Section>
        <h3>
          올해 나의 <p>행운의 색깔</p>은? 👩‍🎤
        </h3>
        <CommentBox color={colors.RED_500}>{splitedColor}</CommentBox>
      </S.Section>
    </S.Container>
  );
};

export default LuckyBox;
