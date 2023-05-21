import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './ui/Button';

describe('Button tests', () => {
  test('render button with text content', () => {
    /* eslint-disable i18next/no-literal-string */
    render(<Button theme={ThemeButton.CLEAR}>TEST BUTTON</Button>);
    expect(screen.getByText('TEST BUTTON')).toHaveClass('clear');
  });
  test('render button with clear theme', () => {
    render(<Button theme={ThemeButton.CLEAR} />);
    expect(screen.getByRole('button')).toHaveClass('clear');
  });
  test('render button with primary theme', () => {
    render(<Button theme={ThemeButton.PRIMARY} />);
    expect(screen.getByRole('button')).toHaveClass('primary');
  });
});
