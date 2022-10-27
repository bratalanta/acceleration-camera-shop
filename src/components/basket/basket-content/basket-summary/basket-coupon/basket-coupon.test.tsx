import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../../../tests/helpers/render-test-app';
import BasketCoupon from './basket-coupon';

describe('Component: BasketCoupon', () => {
  it('should render correctly', () => {
    renderTestApp(<BasketCoupon/>, {});

    expect(screen.getByText(/Если у вас есть промокод на скидку/i)).toBeInTheDocument();
  });
});
