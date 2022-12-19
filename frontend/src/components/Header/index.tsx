import { useEffect, useMemo, useRef, useState } from 'react';

import useThrottle from '@/hooks/useThrottle';

import * as S from './index.styles';

const Header = () => {
  const [visible, setVisible] = useState(true);
  const beforeScrollY = useRef(0);

  const throttledScrollFunc = useThrottle(() => {
    const currentScrollY = window.scrollY;
    const newVisible = beforeScrollY.current >= currentScrollY || currentScrollY <= 10;

    beforeScrollY.current = currentScrollY;

    setVisible(newVisible);
  }, 50);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = useMemo(() => throttledScrollFunc, [beforeScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

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
