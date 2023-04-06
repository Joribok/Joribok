import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

import ServerErrorAnimation from '@/assets/ServerErrorAnimation.json';

import * as S from './index.styles';

const NetworkError = () => {
  const [isServerDown, setIsServerDown] = useState(false);

  const handleServerOfflineState = () => {
    window.addEventListener('offline', () => {
      setIsServerDown(true);
    });
    window.addEventListener('online', () => {
      setIsServerDown(false);
    });
  };

  useEffect(() => {
    handleServerOfflineState();

    return () => {
      window.removeEventListener('online', handleServerOfflineState);
      window.removeEventListener('offline', handleServerOfflineState);
    };
  }, []);

  if (!isServerDown) {
    <></>;
  }
  return (
    <S.Container>
      <Lottie animationData={ServerErrorAnimation} loop={true} />
      <S.Title>인터넷 연결이 끊겼습니다</S.Title>
      <p>잠시 후에 다시 시도해주세요</p>
    </S.Container>
  );
};

export default NetworkError;
