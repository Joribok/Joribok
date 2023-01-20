import { setupWorker } from 'msw';

import { AuthHandler } from './auth';
import { ArticleHandler } from './handlers/article';
import { luckyHandlers } from './handlers/lucky';

const worker = setupWorker(...ArticleHandler, ...AuthHandler, ...luckyHandlers);

export { worker };
