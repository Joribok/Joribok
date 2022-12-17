import { useEffect } from 'react';
import { useSetAtom } from 'jotai';

import { snackBarStateAtom } from '@/store';

const useSnackBar = () => {
  const setSnackBarState = useSetAtom(snackBarStateAtom);
  let timer: null | ReturnType<typeof setTimeout> = null;

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
  }, [timer]);

  const showSnackBar = (message: string) => {
    setSnackBarState({ isActive: true, message });
    timer = setTimeout(() => {
      setSnackBarState({ isActive: false, message: '' });
    }, 1000);
  };

  return {
    showSnackBar,
  };
};

export default useSnackBar;
