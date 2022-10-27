import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../../../../tests/helpers/render-test-app';
import { makeFakeCamera } from '../../../../../../tests/mocks/mocks';
import BasketProductControls from './basket-product-controls';

const mockCamera = makeFakeCamera();

describe('Component: BasketProductControls', () => {
  it('should render correctly', () => {
    renderTestApp(<BasketProductControls product={mockCamera} productCount={1}/>, {});

    expect(screen.getByTestId('controls')).toBeInTheDocument();
  });
});
