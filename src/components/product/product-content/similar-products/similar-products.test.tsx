import { screen } from '@testing-library/react';
import { MAX_PRODUCTS_COUNT_PER_SLIDE } from '../../../../const';
import { renderTestApp } from '../../../../tests/helpers/render-test-app';
import { makeFakeCamera } from '../../../../tests/mocks/mocks';
import SimilarProducts from './similar-products';

const mockCameras = [makeFakeCamera(), makeFakeCamera(), makeFakeCamera(), makeFakeCamera()];

describe('Component: SimilarProducts', () => {
  it('should render correctly', () => {
    renderTestApp(<SimilarProducts products={mockCameras}/>, {});

    expect(screen.getAllByTestId('product-card')).toHaveLength(MAX_PRODUCTS_COUNT_PER_SLIDE);
    expect(screen.getByTestId('prev-btn')).toHaveAttribute('disabled');
    expect(screen.getByTestId('similar')).toBeInTheDocument();
  });
});
