import { useEffect, useMemo, useRef, useState } from 'react';

import useThrottle from './useThrottle';

const useHeader = () => {
  const [visible, setVisible] = useState(true);
  const beforeScrollY = useRef(0);

  const throttledScrollFunc = useThrottle(() => {
    const currentScrollY = window.scrollY;
    const newVisible = beforeScrollY.current >= currentScrollY || currentScrollY <= 35;

    beforeScrollY.current = currentScrollY;

    setVisible(newVisible);
  }, 50);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = useMemo(() => throttledScrollFunc, [beforeScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { visible };
};

export default useHeader;
