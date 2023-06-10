import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User';
import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage';

export const initAuthData = createAsyncThunk<User>(
  'user/initAuthData',
  async (_, thunkAPI) => {
    const user = localStorage.getItem(LOCALSTORAGE_USER_KEY);
    if (!user) {
      return thunkAPI.rejectWithValue('User not login');
    }
    return JSON.parse(user);
  },
);
