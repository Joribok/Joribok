import React from 'react';
import Link from 'next/link';
import Lottie from 'lottie-react';

import Button from '@/components/Button';

import { PATH } from '@/constants';
import NotFoundAnimation from '@/assets/NotFoundAnimation.json';

import styled from '@emotion/styled';

const NotFound = () => {
  return (
    <Container>
      <Lottie animationData={NotFoundAnimation} loop={true} />
      <Link href={PATH.BROWSER.MAIN}>
        <Button type={'button'}>홈으로 돌아가기</Button>
      </Link>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
`;

export default NotFound;
