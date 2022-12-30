import { setupServer } from 'msw/node';
import { ArticleHandler } from './article';

export const server = setupServer(...ArticleHandler);
