import React, { HTMLInputTypeAttribute } from 'react';

import * as S from './index.styles';

export interface InputProps {
  type?: HTMLInputTypeAttribute;
  isValid?: boolean;
  hasUnderline?: boolean;
}

const Input = ({
  type = 'text',
  isValid = true,
  hasUnderline = false,
  ...inputAttribute
}: InputProps &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  if (hasUnderline) {
    return <S.UnderlineInput type={type} isValid={isValid} {...inputAttribute} />;
  }

  return <S.Input type={type} isValid={isValid} {...inputAttribute} />;
};

export default Input;
