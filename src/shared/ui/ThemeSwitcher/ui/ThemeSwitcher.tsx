import { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'shared/lib/hooks/useTheme';

import LightIcon from 'shared/assets/icons/theme-default.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames(cls.ThemeSwitcher)}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {
        theme === Theme.DARK
          ? <LightIcon className={cls.icon} />
          : <DarkIcon className={cls.icon} />
      }
    </Button>
  );
});
