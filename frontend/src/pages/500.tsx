import React from 'react';
import Link from 'next/link';
import Lottie from 'lottie-react';

import Button from '@/components/Button';

import { PATH } from '@/constants';
import ServerErrorAnimation from '@/assets/ServerErrorAnimation.json';

import styled from '@emotion/styled';

const ServerError = () => {
  return (
    <Container>
      <Lottie animationData={ServerErrorAnimation} loop={true} />
      <Link href={PATH.BROWSER.MAIN}>
        <Title>서버 에러 발생</Title>
        <Button type="button">홈으로 돌아가기</Button>
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

const Title = styled.h2`
  display: block;
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  font-weight: 800;
`;

export default ServerError;
