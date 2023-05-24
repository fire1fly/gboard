import { render } from 'react-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from './app/providers/ThemeProvider/ui/ThemeProvider';
import './app/styles/index.scss';

import { App } from './app/App';

import 'shared/config/i18n/i18n';

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
);
