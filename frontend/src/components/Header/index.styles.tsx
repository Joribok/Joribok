import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  z-index: ${({ theme: { zIndex } }) => zIndex.HEADER};

  width: 97%;
  height: 3rem;

  background: ${({ theme: { colors } }) => colors.GREEN_500};

  padding: 0 0.5rem;

  transition: transform 0.1s;

  &.show {
    transform: translate3d(0, 0, 0);
  }

  &.hide {
    transform: translate3d(0, -3rem, 0);
  }
`;

const Wrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme: { colors } }) => colors.WHITE_100};

  font-size: 1.2rem;
  font-weight: 700;

  text-decoration: none;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  aspect-ratio: 1 / 1;

  background: ${({ theme: { colors } }) => colors.WHITE_100};

  border-radius: 50%;
`;

const HamburgerButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 2rem;
  height: 1.2rem;

  cursor: pointer;

  span {
    width: 100%;
    height: 0.15rem;

    background: ${({ theme: { colors } }) => colors.WHITE_100};

    border-radius: 8px;
  }
`;

export { Container, Wrapper, Logo, HamburgerButton };
