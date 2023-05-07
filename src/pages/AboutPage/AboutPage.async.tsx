import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
  setTimeout(() => {
    // @ts-ignore
    // Имитация загрузки, в реальных проектах так делать нельзя
    resolve(import('./AboutPage'))
  }, 1000);
}));