import { useState } from 'react';

import { getRandomColor } from '@/util/getRandomColor';

import * as S from './index.styles';
import styles from './animation.module.css';

export interface PlanBoxProps {
  plan: string;
  onDeleteButtonClick: () => void;
}

const PlanBox = ({ plan, onDeleteButtonClick }: PlanBoxProps) => {
  const [animationName, setAnimationName] = useState('');

  return (
    <S.Container
      className={animationName}
      randomColor={getRandomColor()}
      onMouseOver={() => setAnimationName(styles.isHover)}
      onMouseUp={() => setAnimationName(styles.isHover)}
      onMouseOut={() => setAnimationName('')}
    >
      <S.Content>{plan}</S.Content>
      <S.DeleteButton onClick={onDeleteButtonClick} aria-label={'계획 삭제하기'}>
        <S.DeleteIcon />
      </S.DeleteButton>
    </S.Container>
  );
};

export default PlanBox;
