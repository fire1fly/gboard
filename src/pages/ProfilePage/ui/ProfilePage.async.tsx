import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
  setTimeout(() => {
    // @ts-ignore
    // Имитация загрузки, в реальных проектах так делать нельзя
    resolve(import('./ProfilePage'));
  }, 1000);
}));
