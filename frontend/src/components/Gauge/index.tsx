import { useEffect, useState } from 'react';

import * as S from './index.styles';

const animationTime = 1500;

interface GaugeProps {
  gauge: number;
}

const Gauge = ({ gauge }: GaugeProps) => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    stopPlaying();
  }, []);

  const showAnimation = () => {
    if (isPlaying) return;

    setIsPlaying(true);
    stopPlaying();
  };

  const stopPlaying = () => {
    setTimeout(() => {
      setIsPlaying(false);
    }, animationTime);
  };

  return (
    <S.Container onClick={showAnimation}>
      <S.Progress
        value={gauge}
        max={100}
        animationTime={animationTime}
        className={isPlaying ? 'play' : ''}
      />
      <p>{gauge}%</p>
    </S.Container>
  );
};

export default Gauge;
