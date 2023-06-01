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
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

export interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // temporary "as"
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    store.reducerManager.add('loginForm', loginReducer);

    return () => {
      store.reducerManager.remove('loginForm');
    };
  }, [store.reducerManager]);

  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

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
