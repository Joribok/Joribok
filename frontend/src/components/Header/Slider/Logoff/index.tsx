import Link from 'next/link';
import Image from 'next/image';

import logoffSVG from '@/assets/svg/user/logoff.svg';

import * as S from '../index.styles';

interface LogoffProps {
  closeSlider: () => void;
}

const Logoff = ({ closeSlider }: LogoffProps) => {
  return (
    <S.Container>
      <S.UserWrapper>
        <Image src={logoffSVG} alt="로그인 유저" />
        로그인 해주세요 :(
      </S.UserWrapper>
      <S.MenuWrapper>
        <Link onClick={closeSlider} href={'/login'}>
          로그인
        </Link>
        <Link onClick={closeSlider} href={'/signup'}>
          회원가입
        </Link>
      </S.MenuWrapper>
    </S.Container>
  );
};

export default Logoff;
