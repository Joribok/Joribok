import { UserData, UserLoginData } from '@/types/user';

import { instance } from '.';

export const requestSignup = async (userData: UserData) => {
  const { data } = await instance.post('/signup', userData);
  return data;
};

export const requestLogin = async (userLoginData: UserLoginData) => {
  const { data } = await instance.post('/login', userLoginData);
  return data;
};
