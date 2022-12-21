import React from 'react';
import { BUTTON_TYPE, SIZE } from '@/constants';
import { ButtonType, Size } from '@/types';

import * as S from './index.styles';

export interface ButtonProps {
  type?: ButtonType;
  size?: Size;
  isAvailable?: boolean;
  children: string;
}

const Button = ({
  type = BUTTON_TYPE.SUBMIT,
  size = SIZE.MEDIUM,
  isAvailable = true,
  children,
  ...buttonAttribute
}: ButtonProps &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => {
  switch (size) {
    case SIZE.SMALL:
      return (
        <S.SmallButton type={type} isAvailable={isAvailable} {...buttonAttribute}>
          {children}
        </S.SmallButton>
      );

    case SIZE.MEDIUM:
      return (
        <S.MediumButton type={type} isAvailable={isAvailable} {...buttonAttribute}>
          {children}
        </S.MediumButton>
      );

    case SIZE.LARGE:
      return (
        <S.LargeButton type={type} isAvailable={isAvailable} {...buttonAttribute}>
          {children}
        </S.LargeButton>
      );

    default:
      return (
        <S.MediumButton type={type} isAvailable={false} {...buttonAttribute}>
          {children}
        </S.MediumButton>
      );
  }
};

export default Button;
