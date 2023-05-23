import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Modal> = {
  title: 'widgets/Modal',
  component: Modal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
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
