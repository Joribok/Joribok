import { useMutation } from '@tanstack/react-query';
import { requestSignup } from '@/api/auth';

import { useRouter } from 'next/router';
import useSnackBar from './useSnackBar';

const useSignup = () => {
  const { showSnackBar } = useSnackBar();
  const router = useRouter();

  const mutateSignup = useMutation(['signup'], requestSignup, {
    onSuccess: () => {
      showSnackBar(`회원가입에 성공했습니다. 가입한 계정으로 로그인해주세요.`);
      router.push('/login');
    },
    onError: ({
      response: {
        data: { message },
      },
    }) => {
      showSnackBar(`${message}`);
    },
  });

  return mutateSignup;
};

export default useSignup;
