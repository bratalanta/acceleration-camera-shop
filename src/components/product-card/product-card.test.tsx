import { screen } from '@testing-library/react';
import { renderTestApp } from '../../tests/helpers/render-test-app';
import { makeFakeCamera } from '../../tests/mocks/mocks';
import ProductCard from './product-card';

const mockCamera = makeFakeCamera();

describe('Component: ProductCard', () => {
  it('should render correctly', () => {
    renderTestApp(<ProductCard product={mockCamera}/>, {});

    expect(screen.getByTestId('product-card')).toBeInTheDocument();
    expect(screen.getByText(mockCamera.name)).toBeInTheDocument();
    expect(screen.getByText(mockCamera.reviewCount)).toBeInTheDocument();
  });
});
