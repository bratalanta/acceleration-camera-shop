import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../tests/helpers/render-test-app';
import HeaderBasketCount from './header-basket-count';

describe('Component: HeaderBasketCount', () => {
  it('should render correctly', () => {
    renderTestApp(<HeaderBasketCount />, {});

    expect(screen.getByTestId('cnt')).toBeInTheDocument();
  });
});
