import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

import theme from '@/styles/theme';

import fontStyle from './font';

const globalStyle = css`
  ${emotionReset}
  ${fontStyle}

  @counter-style goal-counter {
    system: cyclic;
    symbols: 🎋 🪅 🪄;
    suffix: ' ';
  }

  :root {
    font-size: 3.2vw;
  }

  * {
    font-family: 'IBMPlexSansKR-Regular';
  }

  a {
    color: ${theme.colors.BLUE_500};
    text-decoration: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};

export default GlobalStyle;
