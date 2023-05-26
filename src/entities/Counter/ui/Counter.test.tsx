import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  beforeEach(() => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 1 } },
    });
  });
  test('render', () => {
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  });

  test('render initial counter value', () => {
    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
  });

  test('click on increment button', () => {
    const incrementBtn = screen.getByTestId('counter-increment');
    userEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('2');
  });
});
