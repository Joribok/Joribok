import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { getTotalArticleCount } from '@/api/article';

import * as S from './index.styles';

const HomeHeader = () => {
  const { data, isSuccess } = useQuery<{ count: number }>(['article-count'], getTotalArticleCount);
  if (isSuccess) {
    return <S.Title>{data.count}개의 계획이 모여있어요</S.Title>;
  }
  return <S.Title>0개의 계획이 모여있어요</S.Title>;
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['article-count'], getTotalArticleCount);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default HomeHeader;
