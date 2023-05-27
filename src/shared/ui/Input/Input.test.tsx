import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Button tests', () => {
  test('render input', () => {
    render(
      <Input
        type="text"
      />,
    );
    expect(screen.getByTestId('input-field')).toBeInTheDocument();
  });
  test('should contain value and class filled', () => {
    render(
      <Input
        type="text"
        value="input value"
      />,
    );
    expect(screen.getByTestId('input')).toHaveValue('input value');
    expect(screen.getByTestId('input-field')).toHaveClass('InputFieldFilled');
  });
  test('should contain label', () => {
    render(
      <Input
        type="text"
        label="Input label"
      />,
    );
    expect(screen.getByTestId('input-label')).toHaveTextContent('Input label');
  });
  test('should contain class without label', () => {
    render(
      <Input
        type="text"
        outputMessage=""
      />,
    );
    expect(screen.getByTestId('input-field')).toHaveClass('InputFieldWithoutLabel');
  });
  test('should contain output message', () => {
    render(
      <Input
        type="text"
        outputMessage="Output message"
      />,
    );
    expect(screen.getByTestId('input-output')).toHaveTextContent('Output message');
  });
  test('should contain class error', () => {
    render(
      <Input
        type="text"
        isError
      />,
    );
    expect(screen.getByTestId('input-field')).toHaveClass('InputFieldError');
  });
  test('should input be focused', () => {
    render(
      <Input
        type="text"
        autofocus
      />,
    );
    expect(screen.getByTestId('input')).toHaveFocus();
    expect(screen.getByTestId('input-field')).toHaveClass('InputFieldFocused');
  });
});
