import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar)}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.PRIMARY} to="/">{t('NavbarLinks:main')}</AppLink>
        <AppLink theme={AppLinkTheme.PRIMARY} to="/about">{t('NavbarLinks:about')}</AppLink>
      </div>
    </div>
  );
};
