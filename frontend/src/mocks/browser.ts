import { setupWorker } from 'msw';

import { ArticleHandler } from './article';
import { AuthHandler } from './auth';

export const worker = setupWorker(...ArticleHandler, ...AuthHandler);
