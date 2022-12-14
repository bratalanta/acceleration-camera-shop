import { MockStore } from '@jedmao/redux-mock-store';
import { render } from '@testing-library/react';
import { InitialEntry } from 'history';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore } from '../../store';

type Options = {
  initialState?: Record<string, unknown>
  initialRoute?: InitialEntry;
  mockStore?: MockStore
}

const renderTestApp = (component: JSX.Element, {initialRoute = '/', initialState = {}, mockStore}: Options) => {
  function Wrapper() {
    return (
      <Provider store={mockStore ? mockStore : createStore(initialState)}>
        <MemoryRouter initialEntries={[initialRoute]}>
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
