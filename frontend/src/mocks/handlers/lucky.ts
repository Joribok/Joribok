import { rest } from 'msw';

import { baseURL } from '@/api';
import mockFortunes from '../data/fortunes.json';

const luckyHandlers = [
  rest.get(`${baseURL}/lucky`, (req, res, ctx) => {
    const { fortunes, things, colors } = mockFortunes;

    const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    const thing = things[Math.floor(Math.random() * things.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return res(
      ctx.status(200),
      ctx.json({
        fortune,
        thing,
        color,
      }),
    );
  }),
];

export { luckyHandlers };
