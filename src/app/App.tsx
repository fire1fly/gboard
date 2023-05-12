import './styles/index.sass';

import { useTheme } from 'shared/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';

export const App = () => {

  const { theme } = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <Suspense fallback="Загрузка...">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
