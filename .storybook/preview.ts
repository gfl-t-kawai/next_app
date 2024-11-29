import type { Preview } from "@storybook/react";
import { initialize, mswDecorator } from 'msw-storybook-addon';

// MSW 初期化
initialize({
  onUnhandledRequest: 'warn', // モックされていないリクエストに警告を表示
});

// MSWのデコレータを適用
export const decorators = [mswDecorator];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
