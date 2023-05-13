import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { routeConfig } from '../config/routeConfig';

export const AppRouter = () => (
  <Suspense fallback="Загрузка...">
    <Routes>
      {
        Object.values(routeConfig).map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={(
              <div className="page-wrapper">
                {route.element}
              </div>
            )}
          />
        ))
      }
    </Routes>
  </Suspense>
);
