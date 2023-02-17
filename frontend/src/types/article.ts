export type Article = {
  id: number;
  nickname: string;
  plans: string[];
};

export type TotalArticle = {
  id: number;
  nickname: string;
  plans: string;
};

export interface AllArticleResponseType {
  articles: TotalArticle[];
  pageNumber: number;
  hasNext: boolean;
  totalCount: number;
}

export interface Comment {
  nickname: string;
  gauge: number;
  content: string;
}
