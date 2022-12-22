import { atom } from 'jotai';

const loginStateAtom = atom({
  isLogin: false,
  id: '',
  nickname: '',
});
const snackBarStateAtom = atom({
  isActive: false,
  message: '',
});

export { loginStateAtom, snackBarStateAtom };
