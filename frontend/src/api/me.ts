import { instanceWithAccessToken } from '.';

import { Me } from '@/types';
import { PATH } from '@/constants';

const getMyInformation = () => {
  return instanceWithAccessToken.get<Me>(PATH.API.ME).then(response => response.data);
};

export { getMyInformation };
