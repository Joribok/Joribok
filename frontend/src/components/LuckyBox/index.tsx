import { useTheme } from '@emotion/react';

import CommentBox from './CommentBox';
import { useTyping } from '@/hooks/useTyping';

import * as S from './index.styles';

const animationDelay = 5;

interface LuckyBoxProps {
  luck: string;
  object: string;
  color: string;
}

const LuckyBox = ({ luck, object, color }: LuckyBoxProps) => {
  const splitedLuck = useTyping(luck);
  const splitedObject = useTyping(object, luck.length + animationDelay);
  const splitedColor = useTyping(color, luck.length + object.length + animationDelay * 2);

  const { colors } = useTheme();

  return (
    <S.Container>
      <S.Section>
        <h3>
          올해 나의 <p>운세</p>는? 😘
        </h3>
        <CommentBox color={colors.YELLOW_500}>{splitedLuck}</CommentBox>
      </S.Section>
      <S.Section>
        <h3>
          올해 나의 <p>행운의 물건</p>은? 🧚‍♀️
        </h3>
        <CommentBox color={colors.GREEN_500}>{splitedObject}</CommentBox>
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
