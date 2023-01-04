import { setupServer } from 'msw/node';
import { ArticleHandler } from './article';
import { SignupHandler } from './auth';

export const server = setupServer(...ArticleHandler, ...SignupHandler);
