import { atom } from 'jotai';

const userStateAtom = atom({
  isLogin: false,
  id: '',
  nickname: '',
});
const snackBarStateAtom = atom({
  isActive: false,
  message: '',
});

export { userStateAtom, snackBarStateAtom };
