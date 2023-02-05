import { rest } from 'msw';

import { UserData, UserLoginData } from '@/types/user';

const HOME_URL = 'https://localhost:3000/api';

export const AuthHandler = [
  rest.post(`${HOME_URL}/signup`, (req, res, ctx) => {
    return req.json<UserData>().then(({ id, password, nickname }) => {
      if (!id || !password || !nickname) {
        return res(ctx.status(400), ctx.json({ message: '입력값을 다시 확인해주세요.' }));
      }

      if (id === 'admin1') {
        return res(
          ctx.status(400),
          ctx.json({ message: '이미 존재하는 아이디입니다. 다시 입력해주세요.' }),
        );
      }

      if (nickname === '관리자') {
        return res(
          ctx.status(400),
          ctx.json({ message: '이미 존재하는 닉네임입니다. 다시 입력해주세요.' }),
        );
      }

      return res(ctx.status(201));
    });
  }),
  rest.post(`${HOME_URL}/login`, (req, res, ctx) => {
    return req.json<UserLoginData>().then(({ id, password }) => {
      if (!id || !password) {
        return res(ctx.status(400), ctx.json({ message: '입력값을 다시 확인해주세요.' }));
      }

      if (id !== 'lah1203') {
        return res(ctx.status(400), ctx.json({ message: '존재하지 않는 아이디입니다.' }));
      }

      if (password !== 'tntl1122!') {
        return res(ctx.status(400), ctx.json({ message: '잘못된 패스워드입니다.' }));
      }

      return res(
        ctx.status(200),
        ctx.json({
          accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFkbWluMSIsIm5pY2tuYW1lIjoi6rSA66as7J6QIiwiaWF0IjoxNTE2MjM5MDIyfQ.loSb7dhucYVKhce3zy7vN-ffCjT73dunky8w_pMjLA0',
          id: 'lah1203',
          nickname: '관리자',
        }),
      );
    });
  }),
];
