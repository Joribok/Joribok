import React from 'react';

import theme from '@/styles/theme';
import { ALIGN } from '@/constants';
import { Align } from '@/types';

import * as S from './index.styles';

export interface BoxProps {
  color?: string;
  align?: Align;
  children: React.ReactNode;
}

const Box = ({ color = theme.colors.BLUE_100, align = ALIGN.LEFT, children }: BoxProps) => {
  return (
    <S.Box color={color} align={align}>
      {children}
    </S.Box>
  );
};

export default Box;
