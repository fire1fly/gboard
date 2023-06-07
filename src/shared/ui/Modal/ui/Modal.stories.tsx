import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'widgets/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalLight: Story = {
  args: {
    isOpen: true,
    children: (
      <div>
        <h1>Modal</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quia.</p>
      </div>
    ),
  },
};
export const ModalDark: Story = {
  args: {
    isOpen: true,
    children: (
      <div>
        <h1>Modal</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quia.</p>
      </div>
    ),
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
