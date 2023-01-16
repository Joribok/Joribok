import { setupServer } from 'msw/node';

import { ArticleHandler } from './article';
import { AuthHandler } from './auth';

export const server = setupServer(...ArticleHandler, ...AuthHandler);
