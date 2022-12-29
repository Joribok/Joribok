import React from 'react';

import Header from '../Header';

import * as S from './index.styles';

interface LayoutProps {
  children: React.ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <S.Content>{children}</S.Content>
    </>
  );
};

export default Layout;
