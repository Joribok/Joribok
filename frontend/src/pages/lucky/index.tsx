import { useQuery } from '@tanstack/react-query';

import LuckyBox from '@/components/LuckyBox';
import { getLuckyDraw } from '@/api/lucky';

import * as S from './index.styles';

const lucky = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useQuery(['lucky'], getLuckyDraw);

  if (!data) return <>loading...</>;

  return (
    <S.Container>
      <h1>행운 뽑기 🍀</h1>
      <LuckyBox fortune={data.fortune} thing={data.thing} color={data.color} />
    </S.Container>
  );
};

export default lucky;
