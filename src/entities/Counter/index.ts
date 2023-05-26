import { Counter } from './ui/Counter';
import { counterReducer } from './model/slice/counterSlice';
import { CounterSchema } from './model/types/counterSchema';
import { getCounter } from './model/selectors/getCounter/getCounter';
import { getCounterValue } from './model/selectors/getCounterValue/getCounterValue';

export {
  Counter,
  CounterSchema,
  counterReducer,
  getCounter,
  getCounterValue,
};
