import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { AppRoute } from '../../const';
import AppRouter from '../../router/app-router';
import { createStore } from '../../store';

type Options = {
  initialState: Record<string, unknown>
  initialRoute: AppRoute;
}

const renderTestApp = (component: JSX.Element, options: Options) => {
  const store = createStore(options.initialState);

  function Wrapper() {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[options?.initialRoute]}>
          <AppRouter />
          {component}
        </MemoryRouter>
      </Provider>
    );
  }

  return render(<Wrapper />);
};

export {
  renderTestApp
};
