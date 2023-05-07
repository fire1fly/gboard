import { lazy } from 'react';

export const NotFoundPageAsync = lazy(() => new Promise(resolve => {
  setTimeout(() => {
    // @ts-ignore
    // Имитация загрузки, в реальных проектах так делать нельзя
    resolve(import('./NotFoundPage'))
  }, 1000);
}));