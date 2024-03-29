import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'jotai';
import { ThemeProvider } from '@emotion/react';

import { initialize, mswDecorator } from 'msw-storybook-addon';

import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

initialize();
const queryClient = new QueryClient();

export const decorators = [
  mswDecorator,
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider>
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      </Provider>
    </ThemeProvider>
  ),
];
