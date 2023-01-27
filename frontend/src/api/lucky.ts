import { instanceWithAccessToken } from '.';

import { Lucky } from '@/types';
import { PATH } from '@/constants';

const getLuckyDraw = () => {
  return instanceWithAccessToken.get<Lucky>(PATH.API.LUCKY).then(response => response.data);
};

export { getLuckyDraw };
