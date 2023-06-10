import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item?: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {
  const {
    path,
    label,
    text,
    icon: Icon,
  } = item as SidebarItemType;

  const { t } = useTranslation();

  return (
    <AppLink
      theme={AppLinkTheme.PRIMARY}
      to={path}
      title={label}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <Icon className={cls.item_icon} />
      <span className={cls.item_link}>{t(text)}</span>
    </AppLink>
  );
});
