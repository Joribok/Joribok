import { setupWorker } from 'msw';

import { ArticleHandler } from './handlers/article';
import { luckyHandlers } from './handlers/lucky';

const worker = setupWorker(...ArticleHandler, ...luckyHandlers);

export { worker };
