import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'jotai';
import { initialize, mswDecorator } from 'msw-storybook-addon';

import theme from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from '@/styles/global';

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
