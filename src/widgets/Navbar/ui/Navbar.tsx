import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import cls from './Navbar.module.sass';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(cls.Navbar)}>
    <div className={cls.links}>
      <AppLink theme={AppLinkTheme.PRIMARY} to="/">Main</AppLink>
      <AppLink theme={AppLinkTheme.PRIMARY} to="/about">About</AppLink>
      <AppLink theme={AppLinkTheme.GREEN} to="/privacy">Privacy</AppLink>
    </div>
  </div>
);
