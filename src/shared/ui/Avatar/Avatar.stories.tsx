import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Avatar } from './Avatar';
import AvatarExample from './avatar_example.jpg';

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    alt: 'avatar_example',
    src: AvatarExample,
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const AvatarDefault: Story = {
  decorators: [ThemeDecorator(Theme.DEFAULT)],
};
export const AvatarDefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const AvatarSmall: Story = {
  args: {
    size: 50,
  },
  decorators: [ThemeDecorator(Theme.DEFAULT)],
};
export const AvatarMedium: Story = {
  args: {
    size: 200,
  },
  decorators: [ThemeDecorator(Theme.DEFAULT)],
};
export const AvatarLarge: Story = {
  args: {
    size: 500,
  },
  decorators: [ThemeDecorator(Theme.DEFAULT)],
};
