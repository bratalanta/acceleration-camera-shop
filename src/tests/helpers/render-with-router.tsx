import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

const renderWithRouter = (component: JSX.Element, initialRoute = '/') => {
  function Wrapper() {
    return (
      <MemoryRouter initialEntries={[initialRoute]}>
        {component}
      </MemoryRouter>
    );
  }

  return render(<Wrapper />);
};

export {
  renderWithRouter
};
