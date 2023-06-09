import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { LOCALSTORAGE_USER_KEY } from 'shared/const/localstorage';
import i18next from 'i18next';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User, LoginByUsernameProps, ThunkConfig<string>
>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const {
      dispatch,
      extra,
      rejectWithValue,
    } = thunkAPI;

    try {
      const response = await extra.api.post<User>('/login', authData);

      extra.navigate('/profile');

      if (!response.data) {
        throw new Error();
      }

      // Imitation of authorization, because there is no real backend
      localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(i18next.t('form:output:incorrectUsernameOrPassword'));
    }
  },
);
