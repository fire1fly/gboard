import { Route, Routes } from 'react-router-dom';
import './styles/index.sass';

import { MainPage } from 'pages/MainPage/index';
import { AboutPage } from 'pages/AboutPage/index';
import { NotFoundPage } from 'pages/NotFoundPage/index';
import { Suspense } from 'react';
import { useTheme } from 'shared/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';



export const App = () => {

  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Suspense fallback="Загрузка...">
          <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/about'} element={<AboutPage />} />
            <Route path={'*'} element={<NotFoundPage />} />
          </Routes>
      </Suspense>
    </div>
  )
}
