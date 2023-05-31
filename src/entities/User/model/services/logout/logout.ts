import { createAsyncThunk } from '@reduxjs/toolkit';
import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage';

export const logout = createAsyncThunk(
  'user/logout',
  async () => {
    localStorage.removeItem(LOCALSTORAGE_USER_KEY);
  },
);
