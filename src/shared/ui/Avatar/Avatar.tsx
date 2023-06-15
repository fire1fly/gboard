import {
  CSSProperties, FC, ImgHTMLAttributes, useMemo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
  const {
    src,
    alt = '',
    size,
    className,
    ...otherProps
  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <img
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.Avatar, className)}
      {...otherProps}
    />
  );
};
