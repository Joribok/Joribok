import Link from 'next/link';
import { useEffect, useState } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { PATH, REGEX } from '@/constants';
import useInput from '@/hooks/useInput';
import useLogin from '@/hooks/useLogin';
import useSnackBar from '@/hooks/useSnackBar';

import * as S from './index.styles';

const Login = () => {
  const [id, changeId] = useInput('');
  const [password, changePassword] = useInput('');
  const [isValidate, setIsValidate] = useState(false);
  const { showSnackBar } = useSnackBar();
  const mutateLogin = useLogin();

  useEffect(() => {
    setIsValidate(REGEX.ID.test(id) && REGEX.PASSWORD.test(password));
  }, [id, password]);

  const attemptLogin = () => {
    if (!isValidate) {
      showSnackBar('아이디와 비밀번호를 다시 확인해주세요.');
      return;
    }

    mutateLogin.mutate({ id, password });
  };

  return (
    <S.Container>
      <h3>로그인</h3>
      <S.InputSection>
        <S.InputLabelContainer>
          <S.Label>아이디</S.Label>
          <S.InputContainer>
            <Input value={id} onChange={changeId} />
            <p>영문자, 숫자 조합으로 2~19자 입력해주세요.</p>
          </S.InputContainer>
        </S.InputLabelContainer>
        <S.InputLabelContainer>
          <S.Label>비밀번호</S.Label>
          <S.InputContainer>
            <Input type="password" value={password} onChange={changePassword} />
            <p>영문자, 숫자, 특수문자 조합으로 8~19자 입력해주세요.</p>
          </S.InputContainer>
        </S.InputLabelContainer>
      </S.InputSection>
      <Button isAvailable={isValidate} size="large" onClick={attemptLogin}>
        로그인
      </Button>
      <span>
        아직 가입하지 않으셨다면, <Link href={PATH.BROWSER.SIGNUP}>회원가입</Link> 하러 갈까요?
      </span>
    </S.Container>
  );
};

export default Login;
