import { screen } from '@testing-library/react';
import { renderTestApp } from '../../tests/helpers/render-test-app';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    renderTestApp(<Footer />, {});

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
