import { useEffect, useState } from 'react';
import { useAtomValue } from 'jotai';

import { snackBarStateAtom } from '@/store';
import CreatePortal from '@/util/CreatePortal';

import * as S from './index.styles';
import styles from './animation.module.css';

const SnackBar = () => {
  const snackBarState = useAtomValue(snackBarStateAtom);
  const [snackBarClassName, setSnackBarClassName] = useState('');

  useEffect(() => {
    const name = snackBarState.isActive ? styles.isOpen : styles.isClose;
    setSnackBarClassName(name);
  }, [snackBarState]);

  return (
    <CreatePortal modalId="snack-bar">
      <S.Container>
        <h2 hidden>snackBar가 표시되는 영역입니다</h2>
        <S.MessageBox className={snackBarClassName}>{snackBarState.message}</S.MessageBox>
      </S.Container>
    </CreatePortal>
  );
};

export default SnackBar;
