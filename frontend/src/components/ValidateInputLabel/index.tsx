import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

import Input from '../Input';
import * as S from './index.styles';

interface ValidateInputLabelProps {
  data: string;
  changeData: ChangeEventHandler<HTMLInputElement>;
  isValidateData: boolean;
  inputType?: HTMLInputTypeAttribute;
  label: string;
  message: string;
}

const ValidateInputLabel = ({
  data,
  changeData,
  isValidateData,
  inputType = 'text',
  label,
  message,
}: ValidateInputLabelProps) => {
  return (
    <S.InputLabelContainer>
      <S.Label>{label}</S.Label>
      <S.InputContainer>
        <Input
          value={data}
          type={inputType}
          onChange={changeData}
          isValid={data ? isValidateData : true}
        />
        <p>{message}</p>
      </S.InputContainer>
    </S.InputLabelContainer>
  );
};

export default ValidateInputLabel;
