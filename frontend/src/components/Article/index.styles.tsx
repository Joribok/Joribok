import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { ALIGN } from '@/constants';
import type { UnionizeValues } from '@/types/utils';

type AlignDirection = UnionizeValues<Pick<typeof ALIGN, 'LEFT' | 'RIGHT'>>;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -10px, 0);
  }

  70% {
    transform: translate3d(0, -5px, 0);
  }

  90% {
    transform: translate3d(0,-2px,0);
  }
`;

export const Container = styled.li<{ direction: AlignDirection }>`
  display: flex;
  list-style: none;

  align-items: center;
  gap: 1.25rem;
  flex-direction: ${({ direction }) => (direction === ALIGN.LEFT ? ALIGN.ROW : ALIGN.ROW_REVERSE)};
`;

export const UserName = styled.div<{ randomColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  animation: ${bounce} 1s ease-in-out 1;
  ${({ randomColor }) => `
    background: ${randomColor};
  `};
`;

export const Plan = styled.div`
  display: block;
  width: 75%;
  animation: ${bounce} 1s ease-in-out infinite;
`;
