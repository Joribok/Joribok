import { PATH } from '@/constants';
import { Article, AllArticleResponseType } from '@/types/article';
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

export { getArticle };
