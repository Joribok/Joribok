import { AllArticleResponseType } from '@/types/article';
import { instance, instanceWithAccessToken } from '.';

export const getTotalArticles = async ({ pageNumber }: { pageNumber: number }) => {
  const { data } = await instance.get<AllArticleResponseType>(`/article?pagenumber=${pageNumber}`);
  return data;
};

export const postArticle = async ({ planList }: { planList: string[] }) => {
  const { data } = await instanceWithAccessToken.post(`/article`, planList);
  return data;
};
