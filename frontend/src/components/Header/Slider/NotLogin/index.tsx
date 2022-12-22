import Image from 'next/image';

import notLoginSVG from '@/assets/svg/user/not-login.svg';

import * as S from '../index.styles';

const NotLogin = () => {
  return (
    <S.Container>
      <S.UserWrapper>
        <Image src={notLoginSVG} alt="로그인 유저" />
        로그인 해주세요 :(
      </S.UserWrapper>
      <S.MenuWrapper>
        <p>로그인</p>
        <p>회원가입</p>
      </S.MenuWrapper>
    </S.Container>
  );
};

export default NotLogin;
