import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CurrencySelect } from './CurrencySelect';
import { Currency } from '../../model/types/currency';

const meta: Meta<typeof CurrencySelect> = {
  title: 'entites/CurrencySelect',
  component: CurrencySelect,
  tags: ['autodocs'],
  args: {
    label: 'Currency',
    value: Currency.USD,
  },
  decorators: [
    StoreDecorator(),
  ],
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

export const CurrencySelectDefault: Story = {
  args: {},
};
export const CurrencySelectDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
