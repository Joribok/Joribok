import { instanceWithAccessToken } from '.';

import { Lucky } from '@/types';

const getLuckyDraw = () => {
  return instanceWithAccessToken.get<Lucky>('/lucky').then(response => response.data);
};

export { getLuckyDraw };
