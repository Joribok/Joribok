import { setupWorker } from 'msw';
import { ArticleHandler } from './article';
import { SignupHandler } from './auth';

export const worker = setupWorker(...ArticleHandler, ...SignupHandler);
