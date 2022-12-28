import InfiniteScrollObserver from '@/components/InfiniteScrollObserver/InfiniteScrollObserver';
import { InfiniteQueryObserverResult, InfiniteData } from '@tanstack/react-query';

import Article from '@/components/Article';
import { ALIGN } from '@/constants';
import { AllArticleResponseType } from '@/types/article';

import * as S from './index.styles';
interface ArticleListProps {
  totalArticles: InfiniteData<AllArticleResponseType>;
  fetchNextArticles: () => Promise<InfiniteQueryObserverResult<AllArticleResponseType, Error>>;
}

const ArticleList = ({ totalArticles, fetchNextArticles }: ArticleListProps) => {
  return (
    <S.Container>
      {totalArticles && totalArticles.pages[0].articles.length >= 1 ? (
        <InfiniteScrollObserver
          hasNext={totalArticles.pages[totalArticles.pages.length - 1].hasNext}
          fetchNextPage={fetchNextArticles}
        >
          {totalArticles.pages.map(({ articles }) =>
            articles.map(article => (
              <Article
                key={article.id}
                id={article.id}
                nickname={article.nickname}
                plan={article.plans}
                direction={article.id % 2 === 0 ? ALIGN.LEFT : ALIGN.RIGHT}
              />
            )),
          )}
        </InfiniteScrollObserver>
      ) : (
        <div>데이터가 더 없습니다</div>
      )}
    </S.Container>
  );
};

export default ArticleList;
