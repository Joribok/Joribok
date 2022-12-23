import { setupWorker } from 'msw';

import { luckyHandlers } from './handlers/lucky';

export const worker = setupWorker(...luckyHandlers);
