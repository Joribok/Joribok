import { atom } from 'jotai';

export const snackBarStateAtom = atom({ isActive: false, message: '' });
