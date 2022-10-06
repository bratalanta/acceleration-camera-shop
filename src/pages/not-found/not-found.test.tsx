import { screen } from '@testing-library/react';
import { renderTestApp } from '../../tests/helpers/render-test-app';
import NotFound from './not-found';

describe('Component: NotFound', () => {
  it('should render correctly', () => {
    renderTestApp(<NotFound />, {});

    expect(screen.getByText(/Упс, что-то пошло не так/i)).toBeInTheDocument();
  });
});
