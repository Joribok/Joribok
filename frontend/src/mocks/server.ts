import { setupServer } from 'msw/node';

import { luckyHandlers } from './handlers/lucky';

export const server = setupServer(...luckyHandlers);
