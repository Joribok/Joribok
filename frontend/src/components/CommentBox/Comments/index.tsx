import Box from '@/components/Box';
import Gauge from '@/components/Gauge';
import { Comment } from '@/types/article';

import * as S from './index.styles';

interface CommentsProps {
  comments: Comment[];
}

const Comments = ({ comments }: CommentsProps) => {
  return (
    <S.Container>
      <h3>댓글 ({comments.length})</h3>
      {comments.map(({ nickname, gauge, content }, idx) => (
        <Box key={idx}>
          <S.Comment>
            {nickname}
            <Gauge gauge={gauge} />
            {content}
          </S.Comment>
        </Box>
      ))}
    </S.Container>
  );
};

export default Comments;
