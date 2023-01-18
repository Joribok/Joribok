import { rest } from 'msw';

import { baseURL } from '@/api';
import mockFortunes from '../data/fortunes.json';

const meHandlers = [
  rest.get(`${baseURL}/me`, (req, res, ctx) => {
    const { fortunes, things, colors } = mockFortunes;

    const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    const thing = things[Math.floor(Math.random() * things.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return res(
      ctx.status(200),
      ctx.json({
        plans: [
          '첫 번째 소원',
          '두 번째 소원',
          '세 번째 소원',
          '네 번째 소원',
          '다섯 번째 소원',
          '여섯 번째 소원',
          '일곱 번째 소원',
          '여덟 번째 소원',
          '아홉 번째 소원',
          '열 번째 소원',
        ],
        fortunes: {
          fortune,
          thing,
          color,
        },
      }),
    );
  }),
];

export { meHandlers };
