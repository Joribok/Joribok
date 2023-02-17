import { FormEvent } from 'react';

import { postComment } from '@/api/article';
import Button from '@/components/Button';
import { SIZE } from '@/constants';
import useInput from '@/hooks/useInput';
import useSnackBar from '@/hooks/useSnackBar';
import { Article } from '@/types/article';

import * as S from './index.styles';

interface WritingProps {
  id: Article['id'];
  refetch: () => void;
}

const Writing = ({ id, refetch }: WritingProps) => {
  const [nickname, setNickname, resetNickname] = useInput('');
  const [gauge, setGauge, resetGauge] = useInput(0);
  const [content, setContent, resetContent] = useInput('');

  const { showSnackBar } = useSnackBar();

  const writeComment = (e: FormEvent) => {
    e.preventDefault();

    postComment(id, { nickname, gauge, content })
      .then(() => {
        showSnackBar('댓글을 달았습니다.');

        resetNickname();
        resetGauge();
        resetContent();

        refetch();
      })
      .catch(error => {
        showSnackBar(error.response.data.message);
      });
  };

  return (
    <S.Container onSubmit={writeComment}>
      <S.Title>
        <h2>댓글 쓰기</h2>
        <Button size={SIZE.SMALL}>확인</Button>
      </S.Title>
      <S.Label>
        닉네임
        <S.Input type="text" value={nickname} onChange={setNickname} required />
      </S.Label>
      <S.Label>
        예상 달성률
        <S.Input
          type="number"
          min={0}
          max={100}
          step={1}
          value={gauge}
          onChange={setGauge}
          required
        />
        <p>%</p>
      </S.Label>
      <S.TextArea value={content} onChange={setContent} />
    </S.Container>
  );
};

export default Writing;
