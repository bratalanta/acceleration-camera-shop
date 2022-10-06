import { screen } from '@testing-library/react';
import { renderTestApp } from '../../tests/helpers/render-test-app';
import ErrorMessage from './error-message';

describe('Component: ErrorMessage', () => {
  it('should render correctly', () => {
    renderTestApp(<ErrorMessage />, {});

    expect(screen.getByText(/Не удалось загрузиться/i)).toBeInTheDocument();
  });
});
