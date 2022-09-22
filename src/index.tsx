import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import browserHistory from './browser-history';
import App from './components/app/app';
import HistoryRouter from './components/history-router/history-router';
import { store } from './store';
import { fetchCamerasAction } from './store/api-actions/cameras-api';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(fetchCamerasAction());

root.render(
  <Provider store={store}>
    <HistoryRouter history={browserHistory}>
      <App />
    </HistoryRouter>
  </Provider>
);
