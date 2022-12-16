import React from 'react';

import { INPUT_TYPE } from '@/constants';
import { InputType } from '@/types';

import * as S from './index.styles';

export interface InputProps {
  type?: InputType;
  isValid?: boolean;
  hasUnderline?: boolean;
}

const Input = ({
  type = INPUT_TYPE.TEXT,
  isValid = true,
  hasUnderline = false,
  ...inputAttribute
}: InputProps &
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  switch (hasUnderline) {
    case false:
      return <S.Input type={type} isValid={isValid} {...inputAttribute} />;
    case true:
      return <S.UnderlineInput type={type} isValid={isValid} {...inputAttribute} />;
    default:
      return <S.Input type={type} isValid={isValid} {...inputAttribute} />;
  }
};

export default Input;
