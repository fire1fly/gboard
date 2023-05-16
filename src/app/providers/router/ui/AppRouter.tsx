import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';
import { routeConfig } from '../config/routeConfig';

export const AppRouter = () => (
  <Routes>
    {
      Object.values(routeConfig).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className="page-wrapper">
                {route.element}
              </div>
            </Suspense>
          )}
        />
      ))
    }
  </Routes>
);
