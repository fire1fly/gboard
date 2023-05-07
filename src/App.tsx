import { Route, Routes } from 'react-router-dom';
import './styles/index.sass';

import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { NotFoundPageAsync } from './pages/NotFoundPage/NotFoundPage.async';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';



export const App = () => {

  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Suspense fallback="Загрузка...">
          <Routes>
            <Route path={'/'} element={<MainPageAsync />} />
            <Route path={'/about'} element={<AboutPageAsync />} />
            <Route path={'*'} element={<NotFoundPageAsync />} />
          </Routes>
      </Suspense>
    </div>
  )
}
