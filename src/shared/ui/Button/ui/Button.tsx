import {
  ButtonHTMLAttributes, FC, ReactNode, memo,
} from 'react';
import { ClassnamesMods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  PRIMARY = 'primary',
  OUTLINE = 'outline',
}
export enum ButtonSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    className,
    children,
    theme = ButtonTheme.PRIMARY,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const clsMods: ClassnamesMods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, className, clsMods)}
      {...otherProps}
    >
      {children}
    </button>
  );
});
