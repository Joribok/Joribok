import { dehydrate, QueryClient } from '@tanstack/react-query';
import ArticleList from '@/components/ArticleList';
import HomeHeader from '@/components/HomeHeader';

import useGetTotalArticle from '@/hooks/article/useGetTotalArticle';
import { getTotalArticles } from '@/api/article';

import styled from '@emotion/styled';

const Home = () => {
  const { data: totalArticles, fetchNextPage: fetchNextArticles } = useGetTotalArticle();
  return (
    <Container>
      {totalArticles && totalArticles.pages ? (
        <>
          <HomeHeader totalCount={totalArticles.pages[totalArticles.pages.length - 1].totalCount} />
          <ArticleList totalArticles={totalArticles} fetchNextArticles={fetchNextArticles} />
        </>
      ) : (
        <div>서버 통신에 실패하였습니다</div>
      )}
    </Container>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['total-articles'], () => getTotalArticles({ pageNumber: 1 }));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: fit-content;
`;

export default Home;
