import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (
  state?: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
): Decorator => (Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
);
