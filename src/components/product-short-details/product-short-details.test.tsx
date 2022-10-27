import { screen } from '@testing-library/react';
import { renderTestApp } from '../../tests/helpers/render-test-app';
import { makeFakeCamera } from '../../tests/mocks/mocks';
import ProductShortDetails from './product-short-details';

const mockCamera = {
  ...makeFakeCamera(),
  category: 'Видеокамера'
};

describe('Component: ProductShortDetails', () => {
  it('should render correctly', () => {
    renderTestApp(<ProductShortDetails product={mockCamera}/>, {});

    expect(screen.getByTestId('short')).toBeInTheDocument();
  });
});
