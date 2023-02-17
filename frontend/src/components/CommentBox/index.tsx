import { useQuery } from '@tanstack/react-query';

import { getComments } from '@/api/article';
import { Article } from '@/types/article';

import Writing from './Writing';
import Comments from './Comments';

import * as S from './index.styles';

interface CommentBoxProps {
  id: Article['id'];
  refetchGauge: () => void;
}

const CommentBox = ({ id, refetchGauge }: CommentBoxProps) => {
  const { data, refetch: refetchComments } = useQuery([`comments/${id}`], () => getComments(id));

  const refetchAll = () => {
    refetchComments();
    refetchGauge();
  };

  if (!data) return <>loading...</>;

  return (
    <S.Container>
      <Writing id={id} refetch={refetchAll} />
      <Comments comments={data.comments} />
    </S.Container>
  );
};

export default CommentBox;
