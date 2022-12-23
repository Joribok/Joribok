import Image from 'next/image';

import logoffSVG from '@/assets/svg/user/logoff.svg';

import * as S from '../index.styles';

const Logoff = () => {
  return (
    <S.Container>
      <S.UserWrapper>
        <Image src={logoffSVG} alt="로그인 유저" />
        로그인 해주세요 :(
      </S.UserWrapper>
      <S.MenuWrapper>
        <p>로그인</p>
        <p>회원가입</p>
      </S.MenuWrapper>
    </S.Container>
  );
};

export default Logoff;
