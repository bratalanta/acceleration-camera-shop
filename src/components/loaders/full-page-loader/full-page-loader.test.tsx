import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../tests/helpers/render-test-app';
import FullPageLoader from './full-page-loader';

describe('Component: FullPageLoader', () => {
  it('should render correctly', () => {
    renderTestApp(<FullPageLoader />, {});

    expect(screen.getByTestId('full-loader')).toBeInTheDocument();
  });
});
