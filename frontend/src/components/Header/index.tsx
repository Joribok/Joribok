import { useState } from 'react';

import useHeader from '@/hooks/useHeader';

import * as S from './index.styles';
import Slider from './Slider';

const Header = () => {
  const { visible } = useHeader();
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const showSlider = () => {
    setIsSliderOpen(true);
  };

  const hideSlider = () => {
    setIsSliderOpen(false);
  };

  return (
    <>
      <S.Container className={visible ? 'show' : 'hide'}>
        <S.Wrapper href="/">
          <S.Logo />
          JORIBOK
        </S.Wrapper>
        <S.HamburgerButton onClick={showSlider}>
          <span />
          <span />
          <span />
        </S.HamburgerButton>
      </S.Container>
      {isSliderOpen && <Slider hideSlider={hideSlider} />}
    </>
  );
};

export default Header;
