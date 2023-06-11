import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/userSchema';
import { initAuthData } from '../services/initAuthData/initAuthData';
import { logout } from '../services/logout/logout';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initAuthData.fulfilled, (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.authData = undefined;
    });
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
