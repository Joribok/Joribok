export type UserData = {
  id: string;
  password: string;
  nickname: string;
};

export type UserLoginData = {
  id: UserData['id'];
  password: UserData['password'];
};
