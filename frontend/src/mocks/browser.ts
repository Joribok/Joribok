import { setupWorker } from 'msw';

import { AuthHandler } from './auth';
import { ArticleHandler } from './handlers/article';
import { luckyHandlers } from './handlers/lucky';
import { meHandlers } from './handlers/me';

const worker = setupWorker(...ArticleHandler, ...AuthHandler, ...luckyHandlers, ...meHandlers);

export { worker };
