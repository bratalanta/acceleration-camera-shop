import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../../router/app-router';

const renderWithRouter = (component: JSX.Element, initialRoute = '/') => {
  function Wrapper() {
    return (
      <MemoryRouter initialEntries={[initialRoute]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    );
  }

  return render(<Wrapper />);
};

export {
  renderWithRouter
};
