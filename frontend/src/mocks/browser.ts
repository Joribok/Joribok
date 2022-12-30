import { setupWorker } from 'msw';
import { ArticleHandler } from './article';

export const worker = setupWorker(...ArticleHandler);
