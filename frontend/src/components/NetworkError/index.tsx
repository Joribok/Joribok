import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

import ServerErrorAnimation from '@/assets/ServerErrorAnimation.json';

import styled from '@emotion/styled';

const NetworkError = () => {
  const [isSeverWork, setIsServerWork] = useState(false);

  const handleServerOfflineState = () => {
    window.addEventListener('offline', () => {
      setIsServerWork(true);
    });
    window.addEventListener('online', () => {
      setIsServerWork(false);
    });
  };

  useEffect(() => {
    handleServerOfflineState();

    return () => {
      window.removeEventListener('online', handleServerOfflineState);
      window.removeEventListener('offline', handleServerOfflineState);
    };
  }, []);

  if (isSeverWork) {
    return (
      <Container>
        <Lottie animationData={ServerErrorAnimation} loop={true} />
        <Title>인터넷 연결이 끊겼습니다</Title>
        <div>잠시 후에 다시 시도해주세요</div>
      </Container>
    );
  }
  return <></>;
};

const Container = styled.section`
  position: fixed;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: ${({ theme }) => theme.colors.WHITE_100};

  z-index: 100;
`;

const Title = styled.h2`
  display: block;
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  font-weight: 800;

  color: ${({ theme }) => theme.colors.BLUE_500};
`;

export default NetworkError;
