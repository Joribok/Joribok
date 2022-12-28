import { useInfiniteQuery } from '@tanstack/react-query';

import { getTotalArticles } from '@/api/article';
import { AllArticleResponseType } from '@/types/article';
import { AxiosError } from 'axios';

const useGetTotalArticle = () => {
  const { data, isSuccess, refetch, fetchNextPage } = useInfiniteQuery<
    AllArticleResponseType,
    AxiosError<{ message: string }>
  >(
    ['total-articles'],
    ({
      pageParam = {
        pageNumber: 1,
      },
    }) => getTotalArticles(pageParam),
    {
      getNextPageParam: lastPage => {
        const { hasNext, pageNumber } = lastPage;
        if (hasNext) {
          return {
            pageNumber,
          };
        }
        return;
      },
    },
  );
  return { data, refetch, fetchNextPage, isSuccess };
};

export default useGetTotalArticle;
