import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AppLink.module.sass'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  GREEN = 'green',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {

  const {
    children,
    className,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, cls[theme])}
      {...otherProps}
    >
        {children}
    </Link>
  )
}