import { AsyncThunk, AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type actionCreatorType<Returned, Arg, RejectedValue> = (arg: Arg) =>
  AsyncThunkAction<Returned, Arg, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Returned, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  actionCreator: actionCreatorType<Returned, Arg, RejectedValue>;

  constructor(actionCreator: actionCreatorType<Returned, Arg, RejectedValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    const actionCreator = this.actionCreator(arg);
    const action = await actionCreator(this.dispatch, this.getState, undefined);
    return action;
  }
}
