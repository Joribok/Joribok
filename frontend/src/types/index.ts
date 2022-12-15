import type { UnionizeKeys, UnionizeValues } from './utils';
import { SIZE } from '@/constants';
import theme from '@/styles/theme';

export type Size = UnionizeValues<typeof SIZE>;
declare module '@emotion/react' {
  export interface Theme {
    colors: Record<UnionizeKeys<typeof theme.colors>, string>;
  }
}
