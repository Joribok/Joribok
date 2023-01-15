import { setupServer } from 'msw/node';

import { ArticleHandler } from './handlers/article';
import { luckyHandlers } from './handlers/lucky';

const server = setupServer(...ArticleHandler, ...luckyHandlers);

export { server };
