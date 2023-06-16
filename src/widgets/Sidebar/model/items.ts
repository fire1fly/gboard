import { AppRoutes, RoutePath } from 'app/providers/router/config/routeConfig';

import IconPageHome from 'shared/assets/icons/icon-page-home.svg';
import IconPageAbout from 'shared/assets/icons/icon-page-about.svg';
import IconPageProfile from 'shared/assets/icons/icon-page-profile.svg';

export interface SidebarItemType {
  path: string;
  label: string;
  text: string;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
  {
    path: RoutePath.profile,
    label: AppRoutes.PROFILE,
    text: 'NavbarLinks:profile',
    icon: IconPageProfile,
    authOnly: true,
  },
  {
    path: RoutePath.main,
    label: AppRoutes.MAIN,
    text: 'NavbarLinks:main',
    icon: IconPageHome,
  },
  {
    path: RoutePath.about,
    label: AppRoutes.ABOUT,
    text: 'NavbarLinks:about',
    icon: IconPageAbout,
  },
];
