import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { requestSignup } from '@/api/auth';
import { PATH } from '@/constants';

import useSnackBar from './useSnackBar';

interface useSignupProps {
  id: string;
  password: string;
  nickname: string;
  isValidateId: boolean;
  isValidateNickname: boolean;
  isValidatePassword: boolean;
  isValidateConfirmPassword: boolean;
}

const useSignup = ({
  id,
  password,
  nickname,
  isValidateId,
  isValidateNickname,
  isValidatePassword,
  isValidateConfirmPassword,
}: useSignupProps) => {
  const { showSnackBar } = useSnackBar();
  const router = useRouter();

  const mutateSignup = useMutation(['signup'], requestSignup, {
    onSuccess: () => {
      showSnackBar(`회원가입에 성공했습니다. 가입한 계정으로 로그인해주세요.`);
      router.push(PATH.BROWSER.LOGIN);
    },
    onError: ({
      response: {
        data: { message },
      },
    }) => {
      showSnackBar(`${message}`);
    },
  });

  const attemptSignup = () => {
    if (!isValidateId) {
      showSnackBar('아이디는 영문, 숫자 조합으로 2~19자 사이여야 합니다.');
      return;
    }

    if (!isValidatePassword) {
      showSnackBar('비밀번호는 영문, 숫자, 특수문자 조합으로 8~19자 사이여야 합니다.');
      return;
    }

    if (!isValidateNickname) {
      showSnackBar('닉네임은 문자, 숫자 조합으로 2~19자 사이여야 합니다.');
      return;
    }

    if (!isValidateConfirmPassword) {
      showSnackBar('비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    mutateSignup.mutate({ id, password, nickname });
  };

  return attemptSignup;
};

export default useSignup;
