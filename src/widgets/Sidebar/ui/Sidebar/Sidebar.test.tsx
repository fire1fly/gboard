import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar tests', () => {
  test('render', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle sidebar', () => {
    componentRender(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    const toggleBtn = screen.getByTestId('sidebar-togglebtn');
    userEvent.click(toggleBtn);
    expect(sidebar).toHaveClass('collapsed');
    userEvent.click(toggleBtn);
    expect(sidebar).not.toHaveClass('collapsed');
  });
});
