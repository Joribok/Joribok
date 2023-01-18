import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';

import { getMyInformation } from '@/api/me';
import Box from '@/components/Box';
import LuckyBox from '@/components/LuckyBox';
import Button from '@/components/Button';
import { BUTTON_TYPE } from '@/constants';

import * as S from './index.styles';

const Me = () => {
  const { data } = useQuery(['me'], getMyInformation);

  if (!data) return <>loading...</>;

  return (
    <S.Container>
      <S.PlanContainer>
        {data.plans.length > 0 ? (
          <>
            <h2>나는 이런 걸 새해 목표로 잡았어요 💪</h2>
            <S.PlanWrapper>
              <Box>
                <S.PlanBox>
                  {data.plans.map(plan => (
                    <li key={plan}>{plan}</li>
                  ))}
                </S.PlanBox>
              </Box>
            </S.PlanWrapper>
          </>
        ) : (
          <>
            <h2>아직 새해 목표를 작성하지 않으셨네요! 작성하러 가볼까요?</h2>
            <Link href="/write-plan">
              <Button type={BUTTON_TYPE.BUTTON}>작성하러 가기</Button>
            </Link>
          </>
        )}
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
