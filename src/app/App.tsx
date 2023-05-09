import './styles/index.sass';

import { useTheme } from 'shared/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';



export const App = () => {

  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <AppRouter />
    </div>
  )
}
