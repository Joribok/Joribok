import { TotalArticle } from '@/types/article';
import { rest } from 'msw';

import mockArticle from './data/totalArticle.json';
const HOME_URL = 'https://localhost:3000/api';

export const ArticleHandler = [
  rest.get(`${HOME_URL}/article`, (req, res, ctx) => {
    const pageNumber = req.url.searchParams.get('pagenumber');
    // pageNumber는 1부터 시작합니다
    if (pageNumber === null) {
      return res(ctx.status(400), ctx.json({ message: '존재하지 않은 페이지 넘버입니다.' }));
    }
    const totalArticleLength =
      mockArticle.articles.length % 5 !== 0
        ? Math.floor(mockArticle.articles.length / 5) + 1
        : Math.floor(mockArticle.articles.length / 5);

    let mockArticleArray: TotalArticle[][] = [];
    let tempIndex = 0;
    for (let i = 0; i < totalArticleLength; i++) {
      if (i === totalArticleLength) {
        mockArticleArray.push(mockArticle.articles.slice(tempIndex));
      }
      mockArticleArray.push(mockArticle.articles.slice(tempIndex, tempIndex + 5));
      tempIndex = tempIndex + 5;
    }

    // 마지막 pageNumber일 경우 hasNext를 false로 pageNumber는 동일한 숫자를 반환합니다
    if (totalArticleLength === Number(pageNumber)) {
      return res(
        ctx.status(200),
        ctx.json({
          articles: mockArticleArray[Number(pageNumber) - 1],
          pageNumber,
          hasNext: false,
        }),
      );
    }
    // 더 큰 숫자를 요청할 경우 에러를 반환합니다
    if (Number(pageNumber) > totalArticleLength) {
      return res(ctx.json(400), ctx.json({ message: '존재하지 않는 페이지 넘버입니다' }));
    }
    // 정상적인 요청이 왔을 경우, 미리 분할해둔 article과 pageNumber에 1을 더하여 반환합니다
    return res(
      ctx.status(200),
      ctx.json({
        articles: mockArticleArray[Number(pageNumber) - 1],
        pageNumber: Number(pageNumber) + 1,
        hasNext: true,
      }),
    );
  }),
];
