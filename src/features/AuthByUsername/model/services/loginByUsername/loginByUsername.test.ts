import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {
  const thunk = new TestAsyncThunk(loginByUsername);

  test('login success', async () => {
    const userData = { id: '1', username: 'username' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    const action = await thunk.callThunk({ username: 'username', password: 'qwerty' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(action.meta.requestStatus).toBe('fulfilled');
    expect(action.payload).toEqual(userData);
  });
  test('login error 403', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const action = await thunk.callThunk({ username: 'username', password: 'qwerty' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(action.meta.requestStatus).toBe('rejected');
  });
});
