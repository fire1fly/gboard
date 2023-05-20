import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: 'Button',
  },
  decorators: [ThemeDecorator(Theme.DEFAULT)],
};
export const ClearDark: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: 'Button',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Primary: Story = {
  args: {
    theme: ThemeButton.PRIMARY,
    children: 'Button',
  },
  decorators: [ThemeDecorator(Theme.DEFAULT)],
};
export const PrimaryDark: Story = {
  args: {
    theme: ThemeButton.PRIMARY,
    children: 'Button',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: 'Button',
  },
  decorators: [ThemeDecorator(Theme.DEFAULT)],
};
export const OutlineDark: Story = {
  args: {
    theme: ThemeButton.OUTLINE,
    children: 'Button',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
