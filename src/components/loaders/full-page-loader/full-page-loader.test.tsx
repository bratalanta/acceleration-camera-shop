import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../tests/helpers/render-with-router';
import FullPageLoader from './full-page-loader';

describe('Component: FullPageLoader', () => {
  it('should render correctly', () => {
    renderWithRouter(<FullPageLoader />);

    expect(screen.getByTestId('full-loader')).toBeInTheDocument();
  });
});
