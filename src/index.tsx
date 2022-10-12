import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import browserHistory from './browser-history';
import App from './components/app/app';
import HistoryRouter from './components/history-router/history-router';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TOAST_MAX_COUNT } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <HistoryRouter history={browserHistory}>
      <ToastContainer limit={TOAST_MAX_COUNT}/>
      <App />
    </HistoryRouter>
  </Provider>
);
