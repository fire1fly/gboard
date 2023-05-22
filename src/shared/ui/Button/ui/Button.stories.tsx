import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import IconArrowRight from 'shared/assets/icons/icon-angle-bracket-right.svg';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
    theme: ButtonTheme.CLEAR,
    children: 'Button',
  },
  decorators: [ThemeDecorator(Theme.DEFAULT)],
};
export const ClearDark: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
    children: 'Button',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Primary: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
    children: 'Button',
  },
  decorators: [ThemeDecorator(Theme.DEFAULT)],
};
export const PrimaryDark: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
    children: 'Button',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Outline: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: 'Button',
  },
  decorators: [ThemeDecorator(Theme.DEFAULT)],
};
export const OutlineDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    children: 'Button',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const SquareSizeM: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    square: true,
    size: ButtonSize.M,
    children: '>',
  },
};
export const SquareSizeL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    square: true,
    size: ButtonSize.L,
    children: '>',
  },
};
export const SquareSizeXL: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    square: true,
    size: ButtonSize.XL,
    children: '>',
  },
};
