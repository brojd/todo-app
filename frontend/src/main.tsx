import { SaasProvider } from '@saas-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './application/App.tsx';
import { theme } from './theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SaasProvider theme={theme}>
      <App />
    </SaasProvider>
  </React.StrictMode>
);
