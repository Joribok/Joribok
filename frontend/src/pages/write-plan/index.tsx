import React, { useState } from 'react';
import { useAtomValue } from 'jotai';

import Button from '@/components/Button';
import Input from '@/components/Input';
import PlanBox from '@/components/PlanBox';

import useSnackBar from '@/hooks/useSnackBar';
import usePostArticle from '@/hooks/article/usePostArticle';

import { userStateAtom } from '@/store';

import * as S from './index.styles';
import { SIZE } from '@/constants';

const WritingPlan = () => {
  const userNickName = useAtomValue(userStateAtom);

  const [plan, setPlan] = useState('');
  const [planList, setPlanList] = useState<string[]>([]);

  const { showSnackBar } = useSnackBar();
  const { postArticle } = usePostArticle();

  const onPlanInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlan(e.target.value);
  };

  const onAddPlanButtonClick = () => {
    if (planList.length >= 10) {
      showSnackBar('계획은 10개까지 입력하실 수 있습니다');
      return;
    }

    if (plan.trim().length <= 0) {
      showSnackBar('빈 공백은 입력하실 수 없습니다');
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
      showSnackBar('계획을 입력해주세요');
      return;
    }
    postArticle({ planList });
  };

  return (
    <S.Container>
      <S.Title>
        <span>{userNickName.nickname}</span> 님의 새해 목표
      </S.Title>
      <S.FormContainer
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          onAddPlanButtonClick();
        }}
      >
        <Input type={'text'} value={plan} onChange={onPlanInputChange} />
        <Button type="submit" size={SIZE.SMALL}>
          확인
        </Button>
      </S.FormContainer>
      <S.InputResultContainer>
        {planList.length >= 1 ? (
          planList.map(item => (
            <PlanBox
              key={item}
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
