import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'jotai';
import { ThemeProvider } from '@emotion/react';

import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';
import Layout from '@/components/Layout';
import SnackBar from '@/components/SnackBar';

export const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <SnackBar />
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
