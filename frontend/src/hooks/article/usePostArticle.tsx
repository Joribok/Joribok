import { postArticle } from '@/api/article';
import { useMutation } from '@tanstack/react-query';

const usePostArticle = () => {
  const { mutate } = useMutation(postArticle);
  return {
    postArticle: mutate,
  };
};

export default usePostArticle;
