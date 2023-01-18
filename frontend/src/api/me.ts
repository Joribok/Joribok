import { instanceWithAccessToken } from '.';

import { Me } from '@/types';

const getMyInformation = () => {
  return instanceWithAccessToken.get<Me>('/me').then(response => response.data);
};

export { getMyInformation };
