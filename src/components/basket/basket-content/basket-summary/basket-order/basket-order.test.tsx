import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../../../tests/helpers/render-test-app';
import BasketOrder from './basket-order';

describe('Component: BasketOrder', () => {
  it('should render correctly', () => {
    renderTestApp(<BasketOrder/>, {});

    expect(screen.getByText(/Всего/i)).toBeInTheDocument();
  });
});
