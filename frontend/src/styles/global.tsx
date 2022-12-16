import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

import fontStyle from './font';

const globalStyle = css`
  ${emotionReset}
  ${fontStyle}

  :root {
    font-size: 3.2vw;
  }

  * {
    font-family: 'IBMPlexSansKR-Regular';
  }
`;

const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};

export default GlobalStyle;
