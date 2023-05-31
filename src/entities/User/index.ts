import { userReducer, userActions } from './model/slice/userSlice';
import { UserSchema, User } from './model/types/userSchema';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { logout } from './model/services/logout/logout';

export {
  userReducer,
  userActions,
  User,
  UserSchema,
  getUserAuthData,
  logout,
};
