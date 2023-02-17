import { setupServer } from 'msw/node';

import { AuthHandler } from './handlers/auth';
import { ArticleHandler } from './handlers/article';
import { luckyHandlers } from './handlers/lucky';

const server = setupServer(...ArticleHandler, ...AuthHandler, ...luckyHandlers);

export { server };
