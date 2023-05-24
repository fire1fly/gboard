import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize } from 'shared/ui/Button';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { counterActions } from '../model/slice/counter.slice';

interface CounterProps {
  className?: string;
}

export const Counter: FC<CounterProps> = ({ className }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state: StateSchema) => state.counter.value);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1>
        {counter}
      </h1>
      <Button square size={ButtonSize.XL} onClick={decrement}>
        -
      </Button>
      <Button square size={ButtonSize.XL} onClick={increment}>
        +
      </Button>
    </div>
  );
};
