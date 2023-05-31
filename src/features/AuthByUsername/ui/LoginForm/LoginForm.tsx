import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { Text, TextColor } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';
import { loginActions } from '../../model/slice/loginSlice';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
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
