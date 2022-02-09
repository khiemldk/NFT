import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './styles/global.less';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './store';
import { LoadingFullpage } from 'components/Loading';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { DAppProvider } from '@usedapp/core';
import { config } from 'lib/config';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false, cacheTime: 0, retry: false },
  },
});

const loadingFullpage = <LoadingFullpage />;

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <StrictMode>
        <DAppProvider config={config}>
          <Suspense fallback={loadingFullpage}>
            <QueryClientProvider client={queryClient}>
              <Router>
                <App />
              </Router>
              {process.env.REACT_APP_REACT_QUERY_DEVTOOLS === 'true' && <ReactQueryDevtools initialIsOpen={false} />}
            </QueryClientProvider>
          </Suspense>
        </DAppProvider>
      </StrictMode>
    </HelmetProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
