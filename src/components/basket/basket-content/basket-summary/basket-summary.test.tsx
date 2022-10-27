import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../../tests/helpers/render-test-app';
import BasketSummary from './basket-summary';

describe('Component: BasketSummary', () => {
  it('should render correctly', () => {
    renderTestApp(<BasketSummary/>, {});

    expect(screen.getByText(/Всего/i)).toBeInTheDocument();
    expect(screen.getByText(/Если у вас есть промокод на скидку/i)).toBeInTheDocument();
    expect(screen.getByTestId('summary')).toBeInTheDocument();
  });
});
