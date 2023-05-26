import { counterActions, counterReducer } from './counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counetSlise.test', () => {
  test('test action increment', () => {
    const state: CounterSchema = {
      value: 5,
    };
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 6 });
  });
  test('test action decrement', () => {
    const state: CounterSchema = {
      value: 5,
    };
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 4 });
  });
  test('test with initialState', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
