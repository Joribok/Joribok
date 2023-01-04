import { UserData } from '@/types/user';
import { rest } from 'msw';

const HOME_URL = 'https://localhost:3000/api';

export const SignupHandler = [
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
];
