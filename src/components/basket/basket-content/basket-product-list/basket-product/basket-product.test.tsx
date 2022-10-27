import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../../../tests/helpers/render-test-app';
import { makeFakeCamera } from '../../../../../tests/mocks/mocks';
import BasketProduct from './basket-product';

const mockCamera = {
  ...makeFakeCamera(),
  category: 'Видеокамера'
};

describe('Component: BasketProduct', () => {
  it('should render correctly', () => {
    renderTestApp(<BasketProduct product={mockCamera} productCount={1}/>, {});

    expect(screen.getByTestId('basket-product')).toBeInTheDocument();
  });
});
