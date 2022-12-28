import { AllArticleResponseType } from '@/types/article';
import { instance } from '.';

export const getTotalArticles = async ({ pageNumber }: { pageNumber: number }) => {
  const { data } = await instance.get<AllArticleResponseType>(`/article?pagenumber=${pageNumber}`);
  return data;
};
