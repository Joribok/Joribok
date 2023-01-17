import { useEffect } from 'react';

import Button from '@/components/Button';
import ValidateInputLabel from '@/components/ValidateInputLabel';
import { REGEX } from '@/constants';
import useSignup from '@/hooks/useSignup';
import useValidateInput from '@/hooks/useValidateInput';

import * as S from './index.styles';

const Signup = () => {
  const [id, changeId, isValidateId] = useValidateInput({
    validator: (input: string) => REGEX.ID.test(input),
  });
  const [nickname, changeNickname, isValidateNickname] = useValidateInput({
    validator: (input: string) => REGEX.NICKNAME.test(input),
  });
  const [password, changePassword, isValidatePassword] = useValidateInput({
    validator: (input: string) => REGEX.PASSWORD.test(input),
  });
  const [
    confirmPassword,
    changeConfirmPassword,
    isValidateConfirmPassword,
    setIsValidateConfirmPassword,
  ] = useValidateInput({
    validator: (input: string) => REGEX.PASSWORD.test(input),
  });
  const attemptSignup = useSignup({
    id,
    password,
    nickname,
    isValidateId,
    isValidateNickname,
    isValidatePassword,
    isValidateConfirmPassword,
  });

  useEffect(() => {
    setIsValidateConfirmPassword(password === confirmPassword);
  }, [password, confirmPassword, setIsValidateConfirmPassword]);

  const inputList = [
    {
      state: id,
      changeState: changeId,
      isValidateState: isValidateId,
      inputType: 'text',
      label: '아이디',
      message: '영문자, 숫자 조합으로 2~19자 입력해주세요.',
    },
    {
      state: nickname,
      changeState: changeNickname,
      isValidateState: isValidateNickname,
      inputType: 'text',
      label: '닉네임',
      message: '문자, 숫자 조합으로 2~19자 입력해주세요.',
    },
    {
      state: password,
      changeState: changePassword,
      isValidateState: isValidatePassword,
      inputType: 'password',
      label: '비밀번호',
      message: '영문자, 숫자, 특수문자 조합으로 8~19자 입력해주세요.',
    },
    {
      state: confirmPassword,
      changeState: changeConfirmPassword,
      isValidateState: isValidateConfirmPassword,
      inputType: 'password',
      label: '비밀번호 확인',
      message: '위의 비밀번호와 동일하게 입력해주세요.',
    },
  ];

  return (
    <S.Container>
      <h3>회원가입</h3>
      <S.InputSection>
        {inputList.map(item => (
          <ValidateInputLabel
            key={item.label}
            data={item.state}
            changeData={item.changeState}
            isValidateData={item.isValidateState}
            inputType={item.inputType}
            label={item.label}
            message={item.message}
          />
        ))}
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
