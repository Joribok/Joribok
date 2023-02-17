import { PATH } from '@/constants';
import { Article, AllArticleResponseType, Comment } from '@/types/article';

import { instance, instanceWithAccessToken } from '.';

export const getTotalArticles = async ({ pageNumber }: { pageNumber: number }) => {
  const { data } = await instance.get<AllArticleResponseType>(
    `${PATH.API.ARTICLE}?pagenumber=${pageNumber}`,
  );
  return data;
};

export const postArticle = async ({ planList }: { planList: string[] }) => {
  const { data } = await instanceWithAccessToken.post(`/article`, planList);
  return data;
};

const getArticle = (id: Article['id']) => {
  return instance.get<Article>(`${PATH.API.ARTICLE}/${id}`).then(response => response.data);
};

const getGauge = (id: Article['id']) => {
  return instance
    .get<{ gauge: number }>(`${PATH.API.ARTICLE}/${id}/gauge`)
    .then(response => response.data.gauge);
};

const postComment = (id: Article['id'], comment: Comment) => {
  return instance.post(`${PATH.API.ARTICLE}/${id}/comment`, comment);
};

const getComments = (id: Article['id']) => {
  return instance
    .get<{ comments: Comment[] }>(`${PATH.API.ARTICLE}/${id}/comment`)
    .then(response => response.data);
};

export { getArticle, getGauge, postComment, getComments };
