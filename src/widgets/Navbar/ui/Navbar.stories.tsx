import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
  },
  decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NavbarLight: Story = {
  args: {},
};
export const NavbarDark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
