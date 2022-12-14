import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { initialize, mswDecorator } from 'msw-storybook-addon';

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

const queryClient = new QueryClient();

export const decorator = [
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
