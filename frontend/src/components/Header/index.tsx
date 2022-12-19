import useHeader from '@/hooks/useHeader';

import * as S from './index.styles';

const Header = () => {
  const { visible } = useHeader();

  return (
    <>
      {visible && (
        <S.Container>
          <S.Wrapper href="/">
            <S.Logo />
            JORIBOK
          </S.Wrapper>
          <S.HamburgerButton>
            <span />
            <span />
            <span />
          </S.HamburgerButton>
        </S.Container>
      )}
    </>
  );
};

export default Header;
