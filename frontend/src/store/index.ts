import { atom } from 'jotai';

const loginStateAtom = atom({
  isLogin: false,
  id: '',
  nickname: '',
});

export { loginStateAtom };
