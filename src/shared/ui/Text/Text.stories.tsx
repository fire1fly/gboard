import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextColor, TextSize } from './Text';

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    tag: 'p',
    color: TextColor.primary,
    size: TextSize.M,
    bold: false,
    italic: false,
    underline: false,
    striketrough: false,
    children: 'Some text. Some text. Some text. Some text. Some text. Some text.',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const TextPrimaryDefault: Story = {
  args: {
    color: TextColor.primary,
  },
};
export const TextPrimaryDark: Story = {
  args: {
    color: TextColor.primary,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const TextSecondaryDefault: Story = {
  args: {
    color: TextColor.secondary,
  },
};
export const TextSecondaryDark: Story = {
  args: {
    color: TextColor.secondary,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const TextThemeDefault: Story = {
  args: {
    color: TextColor.theme,
  },
};
export const TextThemeDark: Story = {
  args: {
    color: TextColor.theme,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const TextErrorDefault: Story = {
  args: {
    color: TextColor.error,
  },
};
export const TextErrorDark: Story = {
  args: {
    color: TextColor.error,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const TextWarningDefault: Story = {
  args: {
    color: TextColor.warning,
  },
};
export const TextWarningDark: Story = {
  args: {
    color: TextColor.warning,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const TextSuccessDefault: Story = {
  args: {
    color: TextColor.success,
  },
};
export const TextSuccessDark: Story = {
  args: {
    color: TextColor.success,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const TextInfoDefault: Story = {
  args: {
    color: TextColor.info,
  },
};
export const TextInfoDark: Story = {
  args: {
    color: TextColor.info,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const TextTitle: Story = {
  args: {
    tag: 'h1',
    color: TextColor.primary,
    bold: true,
    children: 'Some title',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const TextSizeXS: Story = {
  args: {
    color: TextColor.primary,
    size: TextSize.XS,
  },
};
export const TextSizeS: Story = {
  args: {
    color: TextColor.primary,
    size: TextSize.S,
  },
};
export const TextSizeM: Story = {
  args: {
    color: TextColor.primary,
    size: TextSize.M,
  },
};
export const TextSizeL: Story = {
  args: {
    color: TextColor.primary,
    size: TextSize.L,
  },
};
export const TextSizeXL: Story = {
  args: {
    color: TextColor.primary,
    size: TextSize.XL,
  },
};
