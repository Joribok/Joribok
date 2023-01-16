import { ALIGN, BUTTON_TYPE, SIZE } from '@/constants';
import theme from '@/styles/theme';

import type { UnionizeKeys, UnionizeValues } from './utils';

export type Size = UnionizeValues<typeof SIZE>;
export type ButtonType = UnionizeValues<typeof BUTTON_TYPE>;
export type Align = UnionizeValues<typeof ALIGN>;

declare module '@emotion/react' {
  export interface Theme {
    colors: Record<UnionizeKeys<typeof theme.colors>, string>;
    zIndex: Record<UnionizeKeys<typeof theme.zIndex>, number>;
  }
}
