import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CountrySelect } from './CountrySelect';
import { Country } from '../../model/types/country';

const meta: Meta<typeof CountrySelect> = {
  title: 'entites/CountrySelect',
  component: CountrySelect,
  tags: ['autodocs'],
  args: {
    label: 'Country',
    value: Country.Armenia,
  },
  decorators: [
    StoreDecorator(),
  ],
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

export const CountrySelectDefault: Story = {
  args: {},
};
export const CountrySelectDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
