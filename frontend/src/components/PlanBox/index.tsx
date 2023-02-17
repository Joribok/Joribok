import { useMemo, useState } from 'react';

import { getRandomColor } from '@/util/getRandomColor';

import * as S from './index.styles';
import styles from './animation.module.css';

export interface PlanBoxProps {
  plan: string;
  onDeleteButtonClick: () => void;
}

const PlanBox = ({ plan, onDeleteButtonClick }: PlanBoxProps) => {
  const [animationName, setAnimationName] = useState('');
  const randomColor = useMemo(() => getRandomColor(), [plan]);

  const settingAnimationName = (className: string) => () => {
    setAnimationName(className);
  };

  return (
    <S.Container
      className={animationName}
      randomColor={randomColor}
      onMouseOver={settingAnimationName(styles.isHover)}
      onMouseUp={settingAnimationName(styles.isHover)}
      onMouseOut={settingAnimationName('')}
    >
      <S.Content>{plan}</S.Content>
      <S.DeleteButton onClick={onDeleteButtonClick} aria-label="계획 삭제하기">
        <S.DeleteIcon />
      </S.DeleteButton>
    </S.Container>
  );
};

export default PlanBox;
