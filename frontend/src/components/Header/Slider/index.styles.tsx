import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const openAnimation = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;

const closeAnimation = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(100%, 0, 0);
  }
`;

const Dimmer = styled.div`
  display: flex;
  justify-content: flex-end;

  position: fixed;
  z-index: 999;
  right: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.3);
`;

const Content = styled.div<{ animationTime: number }>`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  width: 50%;
  height: 100%;

  background: ${({ theme: { colors } }) => colors.WHITE_100};

  border-radius: 5px 0 0 5px;

  padding: 1.5rem;

  ${({ animationTime }) => css`
    animation: ${openAnimation} ${animationTime}ms;

    &.close {
      animation: ${closeAnimation} ${animationTime}ms;
    }
  `}
`;

const CloseButton = styled.div`
  width: 1rem;
  aspect-ratio: 1 / 1;

  border-left: 1px solid ${({ theme: { colors } }) => colors.BLACK_500};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.BLACK_500};

  transform: rotate3d(0, 0, 1, 225deg);

  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  font-size: 1.2rem;
`;

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  span {
    color: ${({ theme: { colors } }) => colors.BLUE_400};

    font-weight: 700;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  p {
    cursor: pointer;
  }
`;

export { Dimmer, Content, CloseButton, Container, UserWrapper, MenuWrapper };
