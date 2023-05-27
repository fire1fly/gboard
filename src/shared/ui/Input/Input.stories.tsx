import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { useState } from 'react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputDefault: Story = {
  args: {
    type: 'text',
  },
};
export const InputDark: Story = {
  args: {
    type: 'text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
export const InputWithLabel: Story = {
  args: {
    type: 'text',
    label: 'some label',
  },
};
export const InputWithOutputMessage: Story = {
  args: {
    type: 'text',
    label: 'some label',
    outputMessage: 'some output message',
  },
};
export const InputError: Story = {
  args: {
    type: 'text',
    label: 'some label',
    isError: true,
    outputMessage: 'some error message',
  },
};
