import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const AppLinkPrimary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Link text',
  },
};
export const AppLinkPrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Link text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const AppLinkGreen: Story = {
  args: {
    theme: AppLinkTheme.GREEN,
    children: 'Link text',
  },
};
export const AppLinkGreenDark: Story = {
  args: {
    theme: AppLinkTheme.GREEN,
    children: 'Link text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const AppLinkRed: Story = {
  args: {
    theme: AppLinkTheme.RED,
    children: 'Link text',
  },
};
export const AppLinkRedDark: Story = {
  args: {
    theme: AppLinkTheme.RED,
    children: 'Link text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
