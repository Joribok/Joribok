import Box from '@/components/Box';
import { ALIGN } from '@/constants';

import * as S from './index.styles';

export interface CommentBoxProps {
  color: string;
  children: string;
}

const CommentBox = ({ color, children }: CommentBoxProps) => {
  return (
    <Box color={color} align={ALIGN.CENTER}>
      <S.Comment>
        {children}
        <S.Blink />
      </S.Comment>
    </Box>
  );
};

export default CommentBox;
