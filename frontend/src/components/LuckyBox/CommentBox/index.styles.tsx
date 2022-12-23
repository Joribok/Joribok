import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const blinkAnimation = keyframes`
  50% {
    border-color: transparent;
  }
`;

const Comment = styled.div`
  max-width: 100%;
  min-height: 1.1rem;
  line-height: 1.2rem;

  font-size: 1.1rem;
`;

const Blink = styled.span`
  height: 100%;

  border-right: 1px solid;

  animation: ${blinkAnimation} 0.5s step-end infinite alternate;
`;

export { Comment, Blink };
