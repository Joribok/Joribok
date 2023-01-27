import { useMutation } from '@tanstack/react-query';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/router';

import { requestLogin } from '@/api/auth';
import { userStateAtom } from '@/store';
import { PATH } from '@/constants';

import useSnackBar from './useSnackBar';

const useLogin = () => {
  const router = useRouter();
  const setUserState = useSetAtom(userStateAtom);
  const { showSnackBar } = useSnackBar();

  const mutateLogin = useMutation(['login'], requestLogin, {
    onSuccess: ({ id, nickname }) => {
      setUserState({ isLogin: true, id, nickname });
      showSnackBar(`${nickname}님 환영합니다.`);
      router.push(PATH.BROWSER.MAIN);
    },
    onError: ({
      response: {
        data: { message },
      },
    }) => {
      showSnackBar(`${message}`);
    },
  });

  return mutateLogin;
};

export default useLogin;
