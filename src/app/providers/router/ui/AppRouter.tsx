import { Suspense, memo, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { routeConfig } from '../config/routeConfig';

export const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter((route) => !(route.authOnly && !isAuth)), [isAuth]);

  return (
    <Routes>
      {
        routes.map((route) => (
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
});
