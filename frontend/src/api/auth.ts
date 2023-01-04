import { UserData } from '@/types/user';
import { instance } from '.';

export const requestSignup = async (userData: UserData) => {
  const { data } = await instance.post('/signup', userData);
  return data;
};
