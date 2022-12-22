import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

const Document = () => {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <div id="snack-bar"></div>
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
