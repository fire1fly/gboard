import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  const state: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
  };

  test('test action setUsername', () => {
    expect(loginReducer(state, loginActions.setUsername('some_username'))).toEqual({
      username: 'some_username',
      password: '',
      isLoading: false,
    });
  });

  test('test action setPassword', () => {
    expect(loginReducer(state, loginActions.setPassword('qwerty'))).toEqual({
      username: '',
      password: 'qwerty',
      isLoading: false,
    });
  });
});
