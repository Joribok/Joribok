import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const gaugeAnimation = keyframes`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`;

const Container = styled.div`
  position: relative;

  height: 1.8rem;

  background: ${({ theme: { colors } }) => colors.WHITE_100};
  border: 1px solid ${({ theme: { colors } }) => colors.BLUE_500};
  border-radius: 5px;

  cursor: pointer;

  p {
    position: absolute;
    top: 25%;
    left: 2%;

    color: ${({ theme: { colors } }) => colors.WHITE_100};

    font-size: 1rem;
    font-weight: 700;
  }
`;

const Progress = styled.progress<{ animationTime: number }>`
  appearance: none;

  width: 100%;
  height: 1.8rem;

  &.play {
    animation: ${gaugeAnimation} ${({ animationTime }) => animationTime}ms ease-in-out;
  }

  &::-webkit-progress-bar {
    background: none;
  }

  &::-webkit-progress-value {
    background: ${({ theme: { colors } }) => colors.BLUE_500};

    border-radius: 4px;
  }
`;

export { Container, Progress };
