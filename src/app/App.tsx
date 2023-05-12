import './styles/index.sass';

import { useTheme } from 'shared/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';



export const App = () => {

  const { theme } = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}
