import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonSize } from 'shared/ui/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

interface CounterProps {
  className?: string;
}

export const Counter: FC<CounterProps> = ({ className }) => {
  const dispatch = useDispatch();
  const counter = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div data-testid="counter">
      <h1 data-testid="counter-value">
        {counter}
      </h1>
      <Button
        square
        size={ButtonSize.XL}
        onClick={decrement}
        data-testid="counter-decrement"
      >
        -
      </Button>
      <Button
        square
        size={ButtonSize.XL}
        onClick={increment}
        data-testid="counter-increment"
      >
        +
      </Button>
    </div>
  );
};
