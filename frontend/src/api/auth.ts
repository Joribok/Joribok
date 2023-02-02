import { UserData, UserLoginData } from '@/types/user';
import { PATH } from '@/constants';

import { instance } from '.';

export const requestSignup = async (userData: UserData) => {
  const { data } = await instance.post(PATH.API.SIGNUP, userData);
  return data;
};

export const requestLogin = async (userLoginData: UserLoginData) => {
  const { data } = await instance.post(PATH.API.LOGIN, userLoginData);
  return data;
};
