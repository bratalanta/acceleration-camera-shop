import { screen } from '@testing-library/react';
import { renderTestApp } from '../../tests/helpers/render-test-app';
import { makeFakeCamera } from '../../tests/mocks/mocks';
import ProductCardList from './product-card-list';

const mockCameras = [makeFakeCamera(), makeFakeCamera(), makeFakeCamera()];

describe('Component: ProductCardList', () => {
  it('should render correctly', () => {
    renderTestApp(<ProductCardList cameras={mockCameras}/>, {});

    expect(screen.getAllByTestId('product-card')).toHaveLength(mockCameras.length);
  });
});
