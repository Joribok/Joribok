import { PAGE_PER_COUNT } from 'src/constant';

export const checkArticleValidate = (plans: string[]) => {
  return plans && plans.length <= PAGE_PER_COUNT && plans.findIndex(plan => plan.length < 1) < 0;
};
