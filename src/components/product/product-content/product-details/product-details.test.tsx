import { screen } from '@testing-library/react';
import { MAX_RATING, NameSpace } from '../../../../const';
import { renderTestApp } from '../../../../tests/helpers/render-test-app';
import { makeFakeCamera } from '../../../../tests/mocks/mocks';
import ProductDetails from './product-details';

const mockCamera = makeFakeCamera();

describe('Component: ProductDetails', () => {
  it('should render correctly', async () => {
    renderTestApp(<ProductDetails />, {
      initialState: {
        [NameSpace.Cameras]: {
          camera: mockCamera
        }
      }
    });

    expect(screen.getByTestId('count')).toBeInTheDocument();
    expect(screen.getAllByTestId('stars')).toHaveLength(MAX_RATING);
    expect(screen.getByTestId('details')).toBeInTheDocument();
    expect(screen.getByText(mockCamera.name)).toBeInTheDocument();
  });
});
