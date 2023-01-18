import { useQuery } from '@tanstack/react-query';

import { getMyInformation } from '@/api/me';
import Box from '@/components/Box';
import LuckyBox from '@/components/LuckyBox';

import * as S from './index.styles';

const Me = () => {
  const { data } = useQuery(['me'], getMyInformation);

  if (!data) return <>loading...</>;

  return (
    <S.Container>
      <S.PlanContainer>
        <h2>나는 이런 걸 새해 목표로 잡았어요 💪</h2>
        <Box>
          <S.PlanBox>
            {data.plans.map(plan => (
              <li key={plan}>{plan}</li>
            ))}
          </S.PlanBox>
        </Box>
      </S.PlanContainer>
      <LuckyBox
        fortune={data.fortunes.fortune}
        thing={data.fortunes.thing}
        color={data.fortunes.color}
      />
    </S.Container>
  );
};

export default Me;
