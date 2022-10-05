import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../tests/helpers/render-with-router';
import Header from './header';

describe('Component: Header', () => {
  it('should render correctly', () => {
    renderWithRouter(<Header />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
