import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage';

export const initAuthData = createAsyncThunk<User>(
  'user/initAuthData',
  async (_, thunkAPI) => {
    const user = localStorage.getItem(LOCALSTORAGE_USER_KEY);
    if (!user) {
      return thunkAPI.rejectWithValue(i18n.t('errors:userNotLogin'));
    }
    return JSON.parse(user);
  },
);
