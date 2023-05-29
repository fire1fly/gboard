import { ElementType, FC, HTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
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

interface TextProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  tag: ElementType;
  color?: TextColor;
  size?: TextSize;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  striketrough?: boolean;
}

export const Text: FC<TextProps> = (props) => {
  const {
    children,
    className,
    tag: Tag,
    size = TextSize.M,
    color = TextColor.primary,
    bold,
    italic,
    underline,
    striketrough,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls[size]]: true,
    [cls[color]]: true,
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
};
