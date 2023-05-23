import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';

import { Button, ButtonSize } from 'shared/ui/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { AppRoutes, RoutePath } from 'app/providers/router/config/routeConfig';

import IconArrowLeft from 'shared/assets/icons/icon-angle-bracket-left.svg';
import IconPageHome from 'shared/assets/icons/icon-page-home.svg';
import IconPageAbout from 'shared/assets/icons/icon-page-about.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation('');

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed })}
    >
      <Button
        data-testid="sidebar-togglebtn"
        type="button"
        onClick={onToggle}
        square
        size={ButtonSize.XL}
        className={cls.collapseBtn}
      >
        <IconArrowLeft className={cls.collapseBtn_icon} />
      </Button>
      <div className={cls.nav}>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to={RoutePath.main}
          className={cls.nav_item}
          title={AppRoutes.MAIN}
        >
          <IconPageHome className={cls.nav_item_icon} />
          <span className={cls.nav_item_link}>{t('NavbarLinks:main')}</span>
        </AppLink>
        <AppLink
          theme={AppLinkTheme.PRIMARY}
          to={RoutePath.about}
          className={cls.nav_item}
          title={AppRoutes.ABOUT}
        >
          <IconPageAbout className={cls.nav_item_icon} />
          <span className={cls.nav_item_link}>{t('NavbarLinks:about')}</span>
        </AppLink>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
};
