import { screen } from '@testing-library/react';
import { renderTestApp } from '../../tests/helpers/render-test-app';
import Header from './header';

describe('Component: Header', () => {
  it('should render correctly', () => {
    renderTestApp(<Header />, {});

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
