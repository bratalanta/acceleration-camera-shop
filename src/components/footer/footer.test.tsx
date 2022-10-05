import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../tests/helpers/render-with-router';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    renderWithRouter(<Footer />);

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
