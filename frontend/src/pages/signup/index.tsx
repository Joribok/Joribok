import { useEffect, useState } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import useInput from '@/hooks/useInput';
import useSnackBar from '@/hooks/useSnackBar';
import { REGEX } from '@/constants';

import * as S from './index.styles';
import useSignup from '@/hooks/useSignup';

const Signup = () => {
  const [id, changeId] = useInput('');
  const [password, changePassword] = useInput('');
  const [nickname, changeNickname] = useInput('');
  const [confirmPassword, changeConfirmPassword] = useInput('');

  const [isValidateId, setIsValidateId] = useState(false);
  const [isValidatePassword, setIsValidatePassword] = useState(false);
  const [isValidateNickname, setIsValidateNickname] = useState(false);
  const [isValidateConfirmPassword, setIsValidateConfirmPassword] = useState(false);
  const { showSnackBar } = useSnackBar();
  const mutateSignup = useSignup();

  useEffect(() => {
    setIsValidateId(REGEX.ID.test(id));
  }, [id]);

  useEffect(() => {
    setIsValidateNickname(REGEX.NICKNAME.test(nickname));
  }, [nickname]);

  useEffect(() => {
    setIsValidatePassword(REGEX.PASSWORD.test(password));
    setIsValidateConfirmPassword(
      REGEX.PASSWORD.test(confirmPassword) && password === confirmPassword,
    );
  }, [password, confirmPassword]);

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

  return (
    <S.Container>
      <h3>회원가입</h3>
      <S.InputSection>
        <S.InputLabelContainer>
          <S.Label>아이디</S.Label>
          <S.InputContainer>
            <Input value={id} onChange={changeId} isValid={id ? isValidateId : true} />
            <p>영문자, 숫자 조합으로 2~19자 입력해주세요.</p>
          </S.InputContainer>
        </S.InputLabelContainer>
        <S.InputLabelContainer>
          <S.Label>닉네임</S.Label>
          <S.InputContainer>
            <Input
              value={nickname}
              onChange={changeNickname}
              isValid={nickname ? isValidateNickname : true}
            />
            <p>문자, 숫자 조합으로 2~19자 입력해주세요.</p>
          </S.InputContainer>
        </S.InputLabelContainer>
        <S.InputLabelContainer>
          <S.Label>비밀번호</S.Label>
          <S.InputContainer>
            <Input
              type="password"
              value={password}
              onChange={changePassword}
              isValid={password ? isValidatePassword : true}
            />
            <p>영문자, 숫자, 특수문자 조합으로 8~19자 입력해주세요.</p>
          </S.InputContainer>
        </S.InputLabelContainer>
        <S.InputLabelContainer>
          <S.Label>비밀번호 확인</S.Label>
          <S.InputContainer>
            <Input
              type="password"
              value={confirmPassword}
              onChange={changeConfirmPassword}
              isValid={confirmPassword ? isValidateConfirmPassword : true}
            />
            <p>위의 비밀번호와 동일하게 입력해주세요.</p>
          </S.InputContainer>
        </S.InputLabelContainer>
      </S.InputSection>
      <Button
        size="large"
        onClick={attemptSignup}
        isAvailable={
          isValidateId && isValidatePassword && isValidateNickname && isValidateConfirmPassword
        }
      >
        가입하기
      </Button>
    </S.Container>
  );
};

export default Signup;
