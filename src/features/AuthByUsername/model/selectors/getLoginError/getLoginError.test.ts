import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('should return error message', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'some error text',
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual('some error text');
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual(null);
  });
});
