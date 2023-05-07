import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
  setTimeout(() => {
    // @ts-ignore
    // Имитация загрузки, в реальных проектах так делать нельзя
    resolve(import('./MainPage'))
  }, 1000);
}));