import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

export const AboutPageDefault: Story = {
  args: {},
};
export const AboutPageDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
