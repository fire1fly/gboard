import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername', () => {
  const thunk = new TestAsyncThunk(loginByUsername);

  test('login success', async () => {
    const userData = { id: '1', username: 'username' };

    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));

    const action = await thunk.callThunk({ username: 'username', password: 'qwerty' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(action.meta.requestStatus).toBe('fulfilled');
    expect(action.payload).toEqual(userData);
  });
  test('login error 403', async () => {
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const action = await thunk.callThunk({ username: 'username', password: 'qwerty' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(action.meta.requestStatus).toBe('rejected');
  });
});
