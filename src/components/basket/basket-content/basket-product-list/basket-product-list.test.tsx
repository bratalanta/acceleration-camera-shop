import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../../tests/helpers/render-test-app';
import BasketProductList from './basket-product-list';

describe('Component: BasketProductList', () => {
  it('should render correctly', () => {
    renderTestApp(<BasketProductList />, {});

    expect(screen.getByTestId('basket')).toBeInTheDocument();
  });
});
