import { PropsWithChildren, useEffect, useRef } from 'react';

import { AllArticleResponseType } from '@/types/article';
import { InfiniteQueryObserverResult } from '@tanstack/react-query';

interface InfiniteScrollObserverProps {
  hasNext: boolean;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult<AllArticleResponseType>>;
}

const InfiniteScrollObserver = ({
  hasNext,
  fetchNextPage,
  children,
}: PropsWithChildren<InfiniteScrollObserverProps>) => {
  const endFlag = useRef<HTMLDivElement>(null);

  const intersectionObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && hasNext) {
      fetchNextPage();
    }
  });

  useEffect(() => {
    if (!endFlag.current) return;
    if (hasNext) {
      intersectionObserver.observe(endFlag.current);
      return;
    }
    intersectionObserver.unobserve(endFlag.current);
    return () => {
      if (!endFlag.current) return;
      intersectionObserver.unobserve(endFlag.current);
    };
  }, [hasNext, endFlag]);

  return (
    <>
      {children}
      <div ref={endFlag} />
    </>
  );
};

export default InfiniteScrollObserver;
