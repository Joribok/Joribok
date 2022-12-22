import Image from 'next/image';
import { useAtomValue } from 'jotai';

import { userStateAtom } from '@/store';
import loginSVG from '@/assets/svg/user/login.svg';

import * as S from '../index.styles';

const Login = () => {
  const { nickname } = useAtomValue(userStateAtom);

  return (
    <S.Container>
      <S.UserWrapper>
        <Image src={loginSVG} alt="로그인 유저" />
        <div>
          <span>{nickname}</span> 님 환영합니다 :)
        </div>
      </S.UserWrapper>
      <S.MenuWrapper>
        <p>로그아웃</p>
        <p>마이페이지</p>
        <p>글 쓰러 가기</p>
      </S.MenuWrapper>
    </S.Container>
  );
};

export default Login;
