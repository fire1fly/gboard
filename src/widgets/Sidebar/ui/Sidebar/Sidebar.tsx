import {
  FC, memo, useMemo, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import IconArrowLeft from 'shared/assets/icons/icon-angle-bracket-left.svg';
import { SidebarItemList } from '../../model/items';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = memo(({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const { t } = useTranslation('');

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemList = useMemo(() => SidebarItemList.map((item) => (
    <SidebarItem
      key={item.path}
      item={item}
      collapsed={collapsed}
    />
  )), [collapsed]);

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
        theme={ButtonTheme.CLEAR}
        size={ButtonSize.XL}
        className={cls.collapseBtn}
      >
        <IconArrowLeft className={cls.collapseBtn_icon} />
      </Button>
      <div className={cls.nav}>
        {
          itemList
        }
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  );
});
