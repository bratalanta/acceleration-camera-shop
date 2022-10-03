import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from '../../store';

const renderWithRedux = (component: JSX.Element, initialState = {}) => {
  const store = createStore(initialState);

  function Wrapper() {
    return (
      <Provider store={store}>
        {component}
      </Provider>
    );
  }

  return render(<Wrapper />);
};

export {
  renderWithRedux
};
