import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../tests/helpers/render-test-app';
import Sort from './sort';

describe('Component: Sort', () => {
  it('should render correctly', () => {
    renderTestApp(<Sort />, {});

    expect(screen.getByTestId('sort')).toBeInTheDocument();
  });
});
