import useGetTotalArticle from '@/hooks/article/useGetTotalArticle';
import InfiniteScrollObserver from '@/components/InfiniteScrollObserver/InfiniteScrollObserver';
import * as S from './index.styles';
import Article from '@/components/Article';

const ArticleList = () => {
  const { data: totalArticles, fetchNextPage: fetchNextArticles } = useGetTotalArticle();

  return (
    <S.Container>
      {totalArticles && totalArticles.pages[0].articles.length >= 1 ? (
        <InfiniteScrollObserver
          hasNext={totalArticles.pages[totalArticles.pages.length - 1].hasNext}
          fetchNextPage={fetchNextArticles}
        >
          <>
            {totalArticles.pages.map(({ articles }) =>
              articles.map(article => (
                <Article
                  key={article.id}
                  id={article.id}
                  nickName={article.nickname}
                  plan={article.plans}
                  direction={article.id % 2 == 0 ? 'left' : 'right'}
                />
              )),
            )}
          </>
        </InfiniteScrollObserver>
      ) : (
        <div>데이터가 더 없습니다</div>
      )}
    </S.Container>
  );
};

export default ArticleList;
