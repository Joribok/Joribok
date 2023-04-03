export const checkArticleValidate = (plans: string[]) => {
  if (!plans) {
    return false;
  }

  if (plans.length > 10) {
    return false;
  }

  for (let i = 0; i < plans.length; i++) {
    if (plans[i].length < 1) {
      return false;
    }
  }
  return true;
};
