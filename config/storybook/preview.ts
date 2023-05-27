import type { Preview } from '@storybook/react';
import i18n from './i18next';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    i18n,
  },
  globals: {
    locale: 'en',
    locales: {
      en: 'English',
      ru: 'Русский',
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.DEFAULT),
    RouterDecorator,
    StoreDecorator,
  ],
};

export default preview;
