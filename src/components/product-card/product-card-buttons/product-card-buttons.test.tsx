import { screen } from '@testing-library/react';
import { renderTestApp } from '../../../tests/helpers/render-test-app';
import { makeFakeCamera } from '../../../tests/mocks/mocks';
import ProductCardButtons from './product-card-buttons';

const mockCamera = makeFakeCamera();

describe('Component: ProductCardButtons', () => {
  it('should render correctly', async () => {
    renderTestApp(<ProductCardButtons product={mockCamera}/>, {});

    expect(screen.getByTestId('btn')).toBeInTheDocument();
  });
});
