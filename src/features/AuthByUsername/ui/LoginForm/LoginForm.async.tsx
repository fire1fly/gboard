import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
  setTimeout(() => {
    // @ts-ignore
    // Loading imitation
    resolve(import('./LoginForm'));
  }, 1000);
}));
