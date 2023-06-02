import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  decorators: [
    StoreDecorator(
      {
        loginForm: {
          username: 'user',
          password: 'example',
        },
      },
      {},
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const LoginFormLight: Story = {};
export const LoginFormDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
