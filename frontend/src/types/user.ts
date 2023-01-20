export interface UserData {
  id: string;
  password: string;
  nickname: string;
}

export type UserLoginData = Pick<UserData, 'id' | 'password'>;
