import {
  FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextColor } from 'shared/ui/Text/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import cls from './LoginForm.module.scss';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';

export interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // temporary "as"
  const store = useStore() as ReduxStoreWithManager;

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  useEffect(() => {
    store.reducerManager.add('loginForm', loginReducer);
    dispatch({ type: '@INIT loginForm reducer' });
    return () => {
      store.reducerManager.remove('loginForm');
      dispatch({ type: '@DESTROY loginForm reducer' });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('error:', error);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLogin = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, className)}>
      <Input
        type="text"
        label={t('form:label:name')}
        onChange={onChangeUsername}
        value={username}
        autofocus
        outputMessage=""
        className={cls.input}
        isError={!!error}
      />
      <Input
        type="password"
        label={t('form:label:password')}
        onChange={onChangePassword}
        value={password}
        className={cls.input}
        isError={!!error}
      />
      {
        error
          && (
            <div className={cls.outputContainer}>
              <Text tag="span" color={TextColor.error}>{error}</Text>
            </div>
          )
      }
      <Button
        type="submit"
        theme={ButtonTheme.PRIMARY}
        size={ButtonSize.M}
        className={cls.loginBtn}
        onClick={onLogin}
        disabled={isLoading}
      >
        {t('form:signin')}
      </Button>
    </div>
  );
});

export default LoginForm;
