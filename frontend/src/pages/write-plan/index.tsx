import React, { useState } from 'react';
import { useAtomValue } from 'jotai';

import Button from '@/components/Button';
import Input from '@/components/Input';
import PlanBox from '@/components/PlanBox';

import useSnackBar from '@/hooks/useSnackBar';
import usePostArticle from '@/hooks/article/usePostArticle';

import { userStateAtom } from '@/store';

import * as S from './index.styles';

const WritingPlan = () => {
  const userNickName = useAtomValue(userStateAtom);

  const [plan, setPlan] = useState('');
  const [planList, setPlanList] = useState<string[]>([]);

  const { showSnackBar } = useSnackBar();
  const { postArticle } = usePostArticle();

  const onPlanInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlan(e.target.value);
  };

  const onPlanConfirmButtonClick = () => {
    if (planList.length >= 10) {
      showSnackBar('계획은 10개까지 입력하실 수 있습니다');
      return;
    }

    if (planList.length >= 1 && planList.includes(plan)) {
      showSnackBar('중복되는 계획은 입력하실 수 없습니다');
      return;
    }
    setPlanList([...planList, plan]);
    setPlan('');
  };

  const onPlanDeleteButtonClick = (currentPlan: string) => {
    setPlanList(planList.filter(item => item !== currentPlan));
  };

  const onPlanSaveButtonClick = () => {
    if (planList.length === 0) {
      showSnackBar('계획은 입력해주세요');
      return;
    }
    postArticle({ planList });
  };

  return (
    <S.Container>
      <S.Title>
        <span>{userNickName.nickname}</span> 님의 새해 목표
      </S.Title>
      <S.InputContainer>
        <Input type={'text'} value={plan} onChange={onPlanInputChange} />
        <Button onClick={onPlanConfirmButtonClick}>확인</Button>
      </S.InputContainer>
      <S.InputResultContainer>
        {planList.length >= 1 ? (
          planList.map((item, index) => (
            <PlanBox
              key={index}
              plan={item}
              onDeleteButtonClick={() => {
                onPlanDeleteButtonClick(item);
              }}
            />
          ))
        ) : (
          <S.EmptyMessage>계획을 입력해주세요</S.EmptyMessage>
        )}
      </S.InputResultContainer>
      <S.SaveButtonContainer>
        <Button onClick={onPlanSaveButtonClick}>저장</Button>
      </S.SaveButtonContainer>
    </S.Container>
  );
};

export default WritingPlan;
