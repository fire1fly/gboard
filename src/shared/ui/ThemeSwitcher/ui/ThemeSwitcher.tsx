import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/lib/useTheme';

import LightIcon from 'shared/assets/icons/theme-default.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  const a = 0;
  const b = 0;
  return (
    <Button
      className={classNames(cls.ThemeSwitcher)}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {
        theme === Theme.DARK
          ? <LightIcon className={cls.icon_light} />
          : <DarkIcon className={cls.icon_dark} />
      }
    </Button>
  );
};
