import { rest } from 'msw';

import { Comment, TotalArticle } from '@/types/article';

import mockArticle from '../data/totalArticle.json';

const HOME_URL = 'https://localhost:3000/api';

export const ArticleHandler = [
  rest.get(`${HOME_URL}/article`, (req, res, ctx) => {
    const pageNumber: string | null = req.url.searchParams.get('pagenumber');
    // pageNumber는 1부터 시작합니다
    if (pageNumber === null) {
      return res(ctx.status(400), ctx.json({ message: '존재하지 않은 페이지 넘버입니다.' }));
    }
    const articleRotateCount =
      mockArticle.articles.length % 5 !== 0
        ? Math.floor(mockArticle.articles.length / 5) + 1
        : Math.floor(mockArticle.articles.length / 5);

    let mockArticleArray: TotalArticle[][] = [];
    let tempIndex = 0;
    for (let i = 0; i < articleRotateCount; i++) {
      if (i === articleRotateCount) {
        mockArticleArray.push(mockArticle.articles.slice(tempIndex));
      }
      mockArticleArray.push(mockArticle.articles.slice(tempIndex, tempIndex + 5));
      tempIndex = tempIndex + 5;
    }

    // 마지막 pageNumber일 경우 hasNext를 false로 pageNumber는 동일한 숫자를 반환합니다
    if (articleRotateCount === Number(pageNumber)) {
      return res(
        ctx.status(200),
        ctx.json({
          articles: mockArticleArray[Number(pageNumber) - 1],
          pageNumber,
          hasNext: false,
          totalCount: mockArticle.articles.length,
        }),
      );
    }
    // 더 큰 숫자를 요청할 경우 에러를 반환합니다
    if (Number(pageNumber) > articleRotateCount) {
      return res(ctx.json(400), ctx.json({ message: '존재하지 않는 페이지 넘버입니다' }));
    }
    // 정상적인 요청이 왔을 경우, 미리 분할해둔 article과 pageNumber에 1을 더하여 반환합니다
    return res(
      ctx.status(200),
      ctx.json({
        articles: mockArticleArray[Number(pageNumber) - 1],
        pageNumber: Number(pageNumber) + 1,
        hasNext: true,
        totalCount: mockArticle.articles.length,
      }),
    );
  }),
  rest.get(`${HOME_URL}/article/:id`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        nickname: '하리',
        plans: [
          '5월 젤다 출시 얌전히 기다리기',
          '취직하기',
          '수업 잘 듣기',
          '졸업 프로젝트 잘 마치기',
        ],
      }),
    );
  }),
  rest.get(`${HOME_URL}/article/:id/gauge`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ gauge: 80 }));
  }),
  rest.post(`${HOME_URL}/article/:id/comment`, (req, res, ctx) => {
    return req.json<Comment>().then(({ nickname, gauge, content }) => {
      if (nickname.length < 1 || gauge < 0 || gauge % 1 !== 0 || content.length < 1) {
        return res(ctx.status(400), ctx.json({ message: '입력하신 댓글을 다시 확인해주세요.' }));
      }

      return res(ctx.status(201));
    });
  }),
  rest.get(`${HOME_URL}/article/:id/comment`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        comments: [
          { nickname: '하리', gauge: 59, content: '화이팅!' },
          { nickname: '하리', gauge: 59, content: '화이팅!' },
        ],
      }),
    );
  }),
];
