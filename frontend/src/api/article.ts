import { AllArticleResponseType } from '@/types/article';
import { instance } from '.';

export const getTotalArticles = async ({ pageNumber }: { pageNumber: number }) => {
  const { data } = await instance.get<AllArticleResponseType>(`/article?pagenumber=${pageNumber}`);
  return data;
};

export const getTotalArticleCount = async () => {
  const { data } = await instance.get<{ count: number }>('/article/total-count');
  return data;
};
