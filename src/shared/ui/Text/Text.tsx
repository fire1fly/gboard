import {
  ElementType, FC, HTMLAttributes, memo,
} from 'react';
import { ClassnamesMods, classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextSize {
  XS = 'size-xs',
  S = 'size-s',
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl',
}

export enum TextColor {
  primary = 'color-primary',
  secondary = 'color-secondary',
  theme = 'color-theme',
  error = 'color-error',
  warning = 'color-warning',
  success = 'color-success',
  info = 'color-info',
}

export enum TextAlign {
  LEFT = 'align-left',
  CENTER = 'align-center',
  RIGHT = 'align-right',
}

interface TextProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  tag: ElementType;
  color?: TextColor;
  size?: TextSize;
  align?: TextAlign;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  striketrough?: boolean;
}

export const Text: FC<TextProps> = memo((props) => {
  const {
    children,
    className,
    tag: Tag,
    size = TextSize.M,
    color = TextColor.primary,
    align = TextAlign.LEFT,
    bold,
    italic,
    underline,
    striketrough,
    ...otherProps
  } = props;

  const mods: ClassnamesMods = {
    [cls[size]]: true,
    [cls[color]]: true,
    [cls[align]]: true,
    [cls.bold]: bold,
    [cls.italic]: italic,
    [cls.underline]: underline,
    [cls.striketrough]: striketrough,
  };

  return (
    <Tag className={classNames(cls.Text, className, mods)} {...otherProps}>
      {children}
    </Tag>
  );
});
