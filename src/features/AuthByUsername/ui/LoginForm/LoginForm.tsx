import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  // temp, for testing!!!
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUsername = (value: string) => {
    setUsername(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };

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
      />
      <Input
        type="password"
        label={t('form:label:password')}
        onChange={onChangePassword}
        value={password}
        className={cls.input}
        isError
        outputMessage={t('form:output:incorrectData')}
      />
      <Button
        theme={ButtonTheme.PRIMARY}
        size={ButtonSize.M}
        className={cls.loginBtn}
      >
        {t('form:signin')}
      </Button>
    </div>
  );
};
