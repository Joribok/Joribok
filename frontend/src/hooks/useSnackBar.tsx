import { useSetAtom } from 'jotai';
import { snackBarStateAtom } from '@/store';

const useSnackBar = () => {
  const setSnackBarState = useSetAtom(snackBarStateAtom);

  const showSnackBar = (message: string) => {
    setSnackBarState({ isActive: true, message });
    setTimeout(() => {
      setSnackBarState({ isActive: false, message: '' });
    }, 1000);
  };

  return {
    showSnackBar,
  };
};

export default useSnackBar;
