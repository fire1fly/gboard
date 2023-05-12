import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'shared/lib/useTheme';
import cls from './ThemeSwitcher.module.sass'

import LightIcon from 'shared/assets/icons/theme-default.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {

  const {theme, toggleTheme} = useTheme();

  return (
    <Button
      className={classNames(cls.ThemeSwitcher)}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR}
    >
      {theme === Theme.DARK ? <LightIcon className={cls.icon_light} /> : <DarkIcon className={cls.icon_dark} />}
    </Button>
  )
}